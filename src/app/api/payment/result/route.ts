import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.formData();
        // EPoint sends data as form-data or JSON. 
        // Usually it includes 'order_id', 'status', 'signature', etc.

        // Convert FormData to object for logging
        const data: Record<string, string> = {};
        body.forEach((value, key) => {
            data[key] = value.toString();
        });

        console.log('EPoint Callback Received:', data);

        // HERE: You would verify the signature and update your database order status.
        // Since we don't have a DB yet, we just log it.

        return NextResponse.json({ status: 'accepted' });
    } catch (error) {
        console.error('Callback Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
