/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import PublicRoute from '@/components/auth/PublicRoute';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
    const { forgotPassword } = useAuth();

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("Email1: ", email);
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Email2: ", email);
            await forgotPassword(email);
            setIsSubmitted(true);
            toast.success('Password reset email sent!');
        } catch (error: any) {
            console.log("Email3: ", email);
            toast.error(error.message || 'Failed to send reset email');
        } finally {
            console.log("Email4: ", email);
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <PublicRoute>
                <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
                    {/* Logo at the top */}
                    <div className="mb-8 text-center">
                        <Link href="/" className="inline-block">
                            <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
                        </Link>
                    </div>

                    {/* White form card */}
                    <Card className="w-full max-w-md shadow-lg bg-white">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center text-gray-900">Check Your Email</CardTitle>
                            <CardDescription className="text-center text-gray-600">
                                We&apos;ve sent a password reset link to {email}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600">
                                    If you don&apos;t see the email, check your spam folder or try again in a few minutes.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setEmail('');
                                    }}
                                    className="w-full"
                                >
                                    Try Another Email
                                </Button>
                                <div>
                                    <Link href="/verify-otp" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
                                        Verify OTP
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PublicRoute>
        );
    }

    return (
        <PublicRoute>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
                {/* Logo at the top */}
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
                    </Link>
                </div>

                {/* White form card */}
                <Card className="w-full max-w-md shadow-lg bg-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-gray-900">Forgot Password</CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            Enter your email address and we&apos;ll send you a link to reset your password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" className='mb-2 text-gray-700'>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    placeholder="Enter your email"
                                    className="text-gray-900 border border-gray-300 rounded-md bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                        </form>

                        <div className="mt-4 text-center">
                            <Link href="/login" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
                                Back to Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PublicRoute>
    );
}
