import type { Metadata } from "next";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "ImaniPay Africa",
  description: "Smart Payment Solutions for Modern Businesses in Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Navbar />
        {children}
        <Footer />

        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
