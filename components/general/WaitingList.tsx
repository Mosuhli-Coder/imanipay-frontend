/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { FiMail, FiArrowRight, FiCheck, FiZap } from 'react-icons/fi';
import { API_ENDPOINTS } from '@/lib/api-config';

export default function WaitingList() {
    const [formData, setFormData] = useState({ email: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(API_ENDPOINTS.waitinglist, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || 'Something went wrong');
                return;
            }
            toast.success('🎉 You\'re on the list! We\'ll notify you when we launch.');
            setFormData({ email: '' });
        } catch (err: any) {
            toast.error(err.message || 'Server error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-600 mb-6">
                            <FiZap className="w-4 h-4" />
                            BE THE FIRST TO KNOW
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Join Our{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                Early Access
                            </span>{' '}
                            List
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Get exclusive early access, special launch offers, and be the first to experience
                            the future of payments in Africa.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
                        <div className="max-w-2xl mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email address"
                                            className="pl-12 pr-4 py-4 h-14 text-lg border-2 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        We respect your privacy. No spam, ever.
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none h-14 text-lg"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Subscribing...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span>Join Early Access</span>
                                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <FiCheck className="w-4 h-4 text-teal-600" />
                            </div>
                            <span className="text-sm font-medium">Exclusive Early Access</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <FiCheck className="w-4 h-4 text-teal-600" />
                            </div>
                            <span className="text-sm font-medium">Special Launch Offers</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <FiCheck className="w-4 h-4 text-teal-600" />
                            </div>
                            <span className="text-sm font-medium">Product Updates</span>
                        </div>
                    </div>

                    {/* Trust Indicator */}
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            Join <span className="font-semibold text-teal-600">2,500+</span> businesses already on the list
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}