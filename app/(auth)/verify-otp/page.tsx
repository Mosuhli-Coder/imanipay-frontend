/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from 'next/image';
import Link from 'next/link';

export default function VerifyOtpPage() {
  const router = useRouter();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [formData, setFormData] = useState({
    email: "",
    otp: ["", "", "", "", "", ""],
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("verifyEmail");
    if (storedEmail) setFormData((p) => ({ ...p, email: storedEmail }));
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, email: e.target.value }));
  };

  const focusAt = (i: number) => {
    const el = inputsRef.current[i];
    if (el) el.focus();
  };

  const handleOtpChange = (index: number, value: string) => {
    // allow only a single digit 0–9
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData((p) => ({ ...p, otp: newOtp }));

    if (value && index < 5) focusAt(index + 1);
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key;

    // Move left on Backspace if current is empty
    if (key === "Backspace" && !formData.otp[index] && index > 0) {
      e.preventDefault();
      const newOtp = [...formData.otp];
      newOtp[index - 1] = "";
      setFormData((p) => ({ ...p, otp: newOtp }));
      focusAt(index - 1);
    }

    // Arrow navigation
    if (key === "ArrowLeft" && index > 0) focusAt(index - 1);
    if (key === "ArrowRight" && index < 5) focusAt(index + 1);
  };

  const handleOtpPaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;

    const newOtp = [...formData.otp];
    for (let i = 0; i < 6 - index; i++) {
      const char = text[i];
      if (!char) break;
      newOtp[index + i] = char;
    }
    setFormData((p) => ({ ...p, otp: newOtp }));
    focusAt(Math.min(index + text.length, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpString = formData.otp.join("");
    if (otpString.length !== 6) {
      toast.error("Please enter a complete 6-digit OTP");
      return;
    }

    try {
      const payload = { email: formData.email, otp: Number(otpString) };
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Login Successful!");
      localStorage.removeItem("verifyEmail");
      setFormData({ email: "", otp: ["", "", "", "", "", ""] });
      router.push("/login");
    } catch (err: any) {
      toast.error(err.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      {/* Logo at the top */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block">
          <Image src="/images/Logo.png" alt="ImaniPay Logo" width={120} height={120} />
        </Link>
      </div>

      {/* White form card */}
      <Card className="w-full max-w-md shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-900">Verify Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-2 text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                className="text-gray-900"
              />
            </div>

            <div>
              <Label className="mb-2 text-gray-700">OTP (6 digits)</Label>
              <div className="flex gap-2 justify-center">
                {formData.otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onPaste={(e) => handleOtpPaste(index, e)}
                    className="w-12 h-12 text-center text-xl text-gray-900"
                    aria-label={`OTP digit ${index + 1}`}
                    required
                  />
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Verify
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}