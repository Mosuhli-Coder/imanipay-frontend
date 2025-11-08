/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import PublicRoute from '@/components/auth/PublicRoute';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(formData.email, formData.password);
            toast.success('Login Successful!');

            setFormData({
                email: '',
                password: '',
            });

            router.push('/dashboard');
        } catch (error: any) {
            toast.error(error.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PublicRoute>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
                {/* Logo at the top */}
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
                    </Link>
                </div>

                {/* White form card with proper text colors */}
                <Card className="w-full max-w-md shadow-lg bg-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-gray-900">Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" className='mb-2 text-gray-700'>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="text-gray-900 border border-gray-300 rounded-md bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className='mb-2 text-gray-700'>Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="text-gray-900 border border-gray-300 rounded-md bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                />
                            </div>

                            <div className="text-right">
                                <a
                                    href="/forgot-password"
                                    className="text-sm text-teal-600 hover:text-tealy-800 hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </PublicRoute>
    );
}
