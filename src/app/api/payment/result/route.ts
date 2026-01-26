import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        // EPoint sends data as form-data
        const formData = await request.formData();
        const data = formData.get('data') as string;
        const signature = formData.get('signature') as string;

        if (!data || !signature) {
            return NextResponse.json({ error: 'Invalid callback data' }, { status: 400 });
        }

        const PRIVATE_KEY = process.env.EPOINT_PRIVATE_KEY;
        if (!PRIVATE_KEY) {
            console.error('Missing Private Key for detailed verification');
            return NextResponse.json({ status: 'error' }, { status: 500 });
        }

        // 1. Verify Signature
        // Signature = base64_encode( sha1( private_key + data + private_key, 1) )
        const signString = PRIVATE_KEY + data + PRIVATE_KEY;
        const mySignature = crypto.createHash('sha1').update(signString).digest('base64');

        if (mySignature !== signature) {
            console.error('Invalid Signature from EPoint callback');
            return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
        }

        // 2. Decode Data
        const jsonString = Buffer.from(data, 'base64').toString('utf-8');
        const transactionData = JSON.parse(jsonString);

        console.log('Payment Result:', transactionData);

        // 3. Process Result
        if (transactionData.status === 'success') {
            // Payment successful
            // TODO: Update order status in your database
            // transactionData.order_id, transactionData.transaction, etc.
            console.log(`Order ${transactionData.order_id} paid successfully.`);
        } else {
            // Payment failed
            console.log(`Order ${transactionData.order_id} failed: ${transactionData.message}`);
        }

        return NextResponse.json({ status: 'accepted' });
    } catch (error) {
        console.error('Callback Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
