import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Types for EPoint Request
interface PaymentRequest {
  public_key: string;
  amount: number;
  currency: string;
  language: string;
  order_id: string; // Unique order ID
  description: string;
  success_redirect_url: string;
  error_redirect_url: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, language, items } = body;

    // 1. Basic Validation
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    // 2. Configuration (Environment Variables)
    // Make sure to set these in your .env.local file
    const PUBLIC_KEY = process.env.EPOINT_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EPOINT_PRIVATE_KEY;

    if (!PUBLIC_KEY || !PRIVATE_KEY) {
      console.error('EPoint keys are missing in environment variables');
      // For development/demo purposes, we might want to return a mock URL if keys are missing
      // But for production, this should fail.
      return NextResponse.json({ error: 'Payment gateway configuration missing' }, { status: 500 });
    }

    // 3. Prepare Data
    const orderId = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const description = `Order ${orderId} - ${items.length} items`; // Brief description

    // EPoint typically expects data to be signed.
    // The specific signature generation depends on EPoint's documentation.
    // This is a common pattern (concatenating fields and signing).
    // REPLACE THIS LOGIC with the exact requirement from EPoint docs if different.
    
    // Construct the data string to sign
    const signatureData = {
        public_key: PUBLIC_KEY,
        amount: amount,
        currency: 'AZN',
        order_id: orderId,
        description: description,
        language: language === 'AZ' ? 'az' : language === 'RU' ? 'ru' : 'en',
        success_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/success`,
        error_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/error`,
    };

    // Example Signature Generation: Base64(SHA1(PrivateKey + DataString))
    // We need to know EXACTLY how they want the string constructed (which fields, what order, separator, etc.)
    // Assuming a simple concatenation of values for now as a placeholder.
    // PLEASE UPDATE THIS PART WITH OFFICIAL DOCS
    const dataToSign = PRIVATE_KEY + 
                       signatureData.amount + 
                       signatureData.currency + 
                       signatureData.order_id + 
                       signatureData.public_key;
    
    const signature = crypto.createHash('sha1').update(dataToSign).digest('base64');

    // 4. Send Request to EPoint to get the payment URL
    // Endpoint might be different, check docs. e.g., https://api.epoint.az/request
    const epointEndpoint = 'https://api.epoint.az/api/1/request'; 

    const payload = {
      ...signatureData,
      signature: signature
    };

    // NOTE: If EPoint works by Redirecting the user with a FORM POST, 
    // we should return the data to the client to submit the form.
    // If EPoint has an API that returns a URL, we do this fetch.
    
    // Let's assume API updates return a JSON with a 'redirect_url' or similar.
    const response = await fetch(epointEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.status === 'success' && result.redirect_url) {
         return NextResponse.json({ url: result.redirect_url });
    } else {
        // Fallback or specific error handling
        console.error('EPoint Error:', result);
        return NextResponse.json({ error: 'Payment initialization failed', details: result }, { status: 400 });
    }

  } catch (error) {
    console.error('Payment API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
