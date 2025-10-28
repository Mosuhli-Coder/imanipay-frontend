import type { Metadata } from "next";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "ImaniPay Africa",
  description: "Smart Payment Solutions for Modern Businesses in Africa",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased">
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}
