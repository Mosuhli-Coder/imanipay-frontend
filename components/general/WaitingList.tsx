/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function WaitingList() {

    const [formData, setFormData] = useState({ email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/waitinglist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || 'Something went wrong');
                return;
            }

            toast.success('Subscription Successful!');
            setFormData({ email: '' });
        } catch (err: any) {
            toast.error(err.message || 'Server error');
        }
    };


    return (
        <div className="flex items-center justify-center bg-teal-800 text-white h-60">
            <div className="w-full">
                <div>
                    <h1 className="text-2xl text-center py-4">Join Our Early Access List</h1>
                </div>
                <div className='px-20'>
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-row gap-4 align-center justify-center">
                        <div className='w-3/4'>
                            <Label htmlFor="email" className='mb-2'>Email</Label>
                            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <Button type="submit" className="mt-5 w-1/4 bg-orange-500 py-5">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
