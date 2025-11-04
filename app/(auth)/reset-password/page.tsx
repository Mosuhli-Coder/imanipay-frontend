/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import PublicRoute from '@/components/auth/PublicRoute';
import Link from 'next/link';
import Image from 'next/image';

export default function ResetPasswordPage() {
    return (
        <PublicRoute>
            <Suspense fallback={
                <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
                    <div className="mb-8 text-center">
                        <Link href="/" className="inline-block">
                            <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
                        </Link>
                    </div>
                    <Card className="w-full max-w-md shadow-lg bg-white">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center text-gray-900">Loading...</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            }>
                <ResetPasswordContent />
            </Suspense>
        </PublicRoute>
    );
}

function ResetPasswordContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { resetPassword } = useAuth();

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [isValidating, setIsValidating] = useState(true);

    useEffect(() => {
        const tokenParam = searchParams.get('token');
        if (!tokenParam) {
            toast.error('Invalid reset link');
            router.push('/forgot-password');
            return;
        }
        setToken(tokenParam);
        setIsValidating(false);
    }, [searchParams, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        try {
            await resetPassword(token!, formData.password, formData.confirmPassword);
            toast.success('Password reset successful!');

            // Clear form
            setFormData({ password: '', confirmPassword: '' });

            // Redirect to login
            setTimeout(() => {
                router.push('/login');
            }, 2000);

        } catch (error: any) {
            toast.error(error.message || 'Failed to reset password');
        } finally {
            setIsLoading(false);
        }
    };

    if (isValidating) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
                    </Link>
                </div>
                <Card className="w-full max-w-md shadow-lg bg-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-gray-900">Validating...</CardTitle>
                    </CardHeader>
                </Card>
            </div >
        );
    }

    return (
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
                    <CardTitle className="text-2xl text-center text-gray-900">Reset Password</CardTitle>
                    <CardDescription className="text-center text-gray-600">
                        Enter your new password below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="password" className='mb-2 text-gray-700'>New Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                placeholder="Enter new password"
                                minLength={6}
                                className="text-gray-900"
                            />
                        </div>
                        <div>
                            <Label htmlFor="confirmPassword" className='mb-2 text-gray-700'>Confirm New Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                placeholder="Confirm new password"
                                minLength={6}
                                className="text-gray-900"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Resetting...' : 'Reset Password'}
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
    );
}
