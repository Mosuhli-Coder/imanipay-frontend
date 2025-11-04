/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import PublicRoute from '@/components/auth/PublicRoute';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Registration successful!");

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      localStorage.setItem("verifyEmail", formData.email);
      router.push("/verify-otp");
    } catch (err: any) {
      toast.error(err.message || "Server error");
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
            <CardTitle className="text-2xl text-center text-gray-900">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="mb-2 text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="text-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="mb-2 text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="text-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="text-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="mb-2 text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="text-gray-900"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
              >
                Register
              </Button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-teal-600 hover:text-teal-800 hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicRoute>
  );
}
