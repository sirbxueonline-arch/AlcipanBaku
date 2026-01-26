import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, language, items } = body;

    // 1. Configuration
    const PUBLIC_KEY = process.env.EPOINT_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EPOINT_PRIVATE_KEY;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://alcipanbaku.com';

    if (!PUBLIC_KEY || !PRIVATE_KEY) {
      return NextResponse.json({ error: 'Payment gateway configuration missing' }, { status: 500 });
    }

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    // 2. Prepare Data Object (json_string parameters)
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const description = `Order ${orderId} - ${items?.length || 0} items`;

    const requestParams = {
      public_key: PUBLIC_KEY,
      amount: amount,
      currency: 'AZN',
      language: language === 'AZ' ? 'az' : language === 'RU' ? 'ru' : 'en',
      order_id: orderId,
      description: description,
      success_redirect_url: `${BASE_URL}/payment/success`,
      error_redirect_url: `${BASE_URL}/payment/error`,
    };

    // 3. Encode Data
    // data = base64_encode( json_string )
    const jsonString = JSON.stringify(requestParams);
    const data = Buffer.from(jsonString).toString('base64');

    // 4. Generate Signature
    // signature = base64_encode( sha1( private_key + data + private_key, 1) )
    // Note: sha1(..., 1) in PHP returns binary. In Node.js, digest('base64') on the hash object handles binary->base64.
    const signString = PRIVATE_KEY + data + PRIVATE_KEY;
    const signature = crypto.createHash('sha1').update(signString).digest('base64');

    // 5. Send Request
    const result = await fetch('https://epoint.az/api/1/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data,
        signature: signature
      })
    });

    const responseData = await result.json();

    if (responseData.status === 'success' && responseData.redirect_url) {
      return NextResponse.json({ url: responseData.redirect_url });
    } else {
      console.error('EPoint Error:', responseData);
      // Try to decode response message if possible, or send raw
      return NextResponse.json({
        error: 'Payment initialization failed',
        details: responseData
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Payment API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
