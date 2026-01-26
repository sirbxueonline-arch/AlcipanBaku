import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { order_id, transaction } = body;
        // Usually status check needs at least a transaction id or order id.
        // EPoint Docs say: 
        // data fields: public_key, language, order_id (optional?), transaction (optional?)
        // Actually the docs example shows:
        // data = { "public_key": "...", "transaction": "...", ... }

        const PUBLIC_KEY = process.env.EPOINT_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.EPOINT_PRIVATE_KEY;

        if (!PUBLIC_KEY || !PRIVATE_KEY) {
            return NextResponse.json({ error: 'Configuration missing' }, { status: 500 });
        }

        if (!order_id && !transaction) {
            return NextResponse.json({ error: 'Missing order_id or transaction id' }, { status: 400 });
        }

        // 1. Prepare Data
        const requestParams: Record<string, string | number> = {
            public_key: PUBLIC_KEY,
            language: 'az', // Default
        };

        if (order_id) requestParams.order_id = order_id;
        if (transaction) requestParams.transaction = transaction;

        // 2. Encode
        const jsonString = JSON.stringify(requestParams);
        const data = Buffer.from(jsonString).toString('base64');

        // 3. Sign
        const signString = PRIVATE_KEY + data + PRIVATE_KEY;
        const signature = crypto.createHash('sha1').update(signString).digest('base64');

        // 4. Send Request
        const response = await fetch('https://epoint.az/api/1/get-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: data,
                signature: signature
            })
        });

        const result = await response.json();

        return NextResponse.json(result);

    } catch (error) {
        console.error('Status Check Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
