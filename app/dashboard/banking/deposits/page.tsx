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

interface Provider {
  id: string;
  name: string;
  country: string;
  currency: string;
}

interface DepositResponse {
  success: boolean;
  data: {
    transactionId: string;
    status: string;
    amount: number;
    provider: string;
    phoneNumber: string;
  };
}

const CURRENCIES = [
  { value: "ALGO", label: "ALGO" },
  { value: "USDC", label: "USDC" },
  { value: "USDT", label: "USDT" },
];

const DepositsPage = () => {
  const { loading, isAuthenticated } = useCurrentUser();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [formData, setFormData] = useState({
    amount: "",
    provider: "",
    phoneNumber: "",
    currency: "USDT",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<DepositResponse | null>(null);

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

  const getWalletId = () => {
    try {
      const dashboardData = localStorage.getItem("dashboardData");
      if (dashboardData) {
        const parsed = JSON.parse(dashboardData);
        if (parsed.wallets && parsed.wallets.length > 0) {
          return parsed.wallets[0].id;
        }
      }
    } catch (err) {
      console.error("Failed to get wallet ID:", err);
    }
    return "cmeau25pr0001iiyopqsyom6e"; // fallback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(API_ENDPOINTS.mobileMoney.deposit, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          walletId: getWalletId(),
          amount: parseFloat(formData.amount),
          provider: formData.provider,
          phoneNumber: formData.phoneNumber,
          currency: formData.currency,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data);
        setFormData({ amount: "", provider: "", phoneNumber: "", currency: "USDT" });
      } else {
        setError("Deposit failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Deposit error:", err);
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
        <h1 className="text-2xl font-bold mb-6">Mobile Money Deposits</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Make a Deposit</CardTitle>
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
                  {isSubmitting ? "Processing..." : "Deposit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deposit Status</CardTitle>
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
                    <strong>Deposit Successful!</strong>
                    <br />
                    Transaction ID: {success.data.transactionId}
                    <br />
                    Status: {success.data.status}
                    <br />
                    Amount: {success.data.amount} {formData.currency}
                    <br />
                    Provider: {success.data.provider}
                    <br />
                    Phone: {success.data.phoneNumber}
                  </AlertDescription>
                </Alert>
              )}

              {!error && !success && (
                <p className="text-gray-500">
                  Fill out the form to make a deposit. Your transaction status will appear here.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </main>
  );
};

export default DepositsPage;
