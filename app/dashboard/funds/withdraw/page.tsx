"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { API_ENDPOINTS } from "@/lib/api-config";
import KYCModal from "@/components/dashboard/KYCModal";

interface Provider {
  id: string;
  name: string;
  country: string;
  currency: string;
}

interface WithdrawResponse {
  success: boolean;
  data: {
    success: boolean;
    message: string;
    payoutStatus: string;
  };
}

const CURRENCIES = [
  { value: "ALGO", label: "ALGO" },
  { value: "USDC", label: "USDC" },
  // { value: "USDT", label: "USDT" },
 
];

const WithdrawPage = () => {
  const { loading, isAuthenticated, user } = useCurrentUser();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [formData, setFormData] = useState({
    amount: "",
    provider: "",
    phoneNumber: "",
    currency: "USDC",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<WithdrawResponse | null>(null);
  const [showKYCModal, setShowKYCModal] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(API_ENDPOINTS.mobileMoney.providers, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setProviders(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch providers:", err);
      }
    };

    if (isAuthenticated) {
      fetchProviders();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Check KYC status on page load
    const dashboardDataString = localStorage.getItem("dashboardData");
    if (dashboardDataString) {
      try {
        const dashboardData = JSON.parse(dashboardDataString);
        if (dashboardData.user && !dashboardData.user.kycVerified) {
          setShowKYCModal(true);
        }
      } catch (e) {
        console.error("Failed to parse dashboardData for KYC check", e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check KYC status before proceeding
    const dashboardDataString = localStorage.getItem("dashboardData");
    if (dashboardDataString) {
      try {
        const dashboardData = JSON.parse(dashboardDataString);
        if (dashboardData.user && !dashboardData.user.kycVerified) {
          setError("KYC verification is required to withdraw funds. Please verify your identity first.");
          return;
        }
      } catch (e) {
        console.error("Failed to parse dashboardData for KYC check", e);
      }
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(API_ENDPOINTS.mobileMoney.withdraw, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user?.id,
          amount: parseFloat(formData.amount),
          provider: formData.provider,
          phoneNumber: formData.phoneNumber,
          currency: formData.currency,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data);
        setFormData({ amount: "", provider: "", phoneNumber: "", currency: "USDC" });
      } else {
        setError("Withdrawal failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Withdrawal error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Make a Withdrawal</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount ({formData.currency})</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => handleInputChange("currency", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {CURRENCIES.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="provider">Provider</Label>
                  <Select
                    value={formData.provider}
                    onValueChange={(value) => handleInputChange("provider", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a provider" />
                    </SelectTrigger>
                    <SelectContent>
                      {providers.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name} ({provider.country})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Processing..." : "Withdraw"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Withdrawal Status</CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="mb-4">
                  <AlertDescription>
                    <strong>Withdrawal Successful!</strong>
                    <br />
                    Message: {success.data.message}
                    <br />
                    Payout Status: {success.data.payoutStatus}
                  </AlertDescription>
                </Alert>
              )}

              {!error && !success && (
                <p className="text-gray-500">
                  Fill out the form to make a withdrawal. Your transaction status will appear here.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <KYCModal
        isOpen={showKYCModal}
        onClose={() => setShowKYCModal(false)}
        walletAddress={
          (() => {
            try {
              const dashboardDataString = localStorage.getItem("dashboardData");
              if (dashboardDataString) {
                const dashboardData = JSON.parse(dashboardDataString);
                return dashboardData.wallets?.[0]?.walletAddress || "";
              }
            } catch (e) {
              console.error("Failed to parse dashboardData for walletAddress", e);
            }
            return "";
          })()
        }
      />
    </main>
  );
};

export default WithdrawPage;
