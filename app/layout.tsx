import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/context/AuthContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next"


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <AuthProvider>
          <SidebarProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </SidebarProvider>
        </AuthProvider>
        <Analytics />
        <SpeedInsights/>
        <Toaster
          position="top-center"
          richColors
        />
      </body>
    </html>
  );
}
