/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email } = data;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const res = await fetch(`${SERVER_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await res.json();

        if (!res.ok) {
            return NextResponse.json({ error: result.message || 'Failed to send reset email' }, { status: res.status });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
