/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { token, newPassword } = data;

        if (!token || !newPassword) {
            return NextResponse.json({ error: 'Token and new password are required' }, { status: 400 });
        }

        if (newPassword.length < 6) {
            return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
        }

        const res = await fetch(`${SERVER_URL}/auth/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, newPassword }),
        });

        const result = await res.json();

        if (!res.ok) {
            return NextResponse.json({ error: result.message || 'Failed to reset password' }, { status: res.status });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
