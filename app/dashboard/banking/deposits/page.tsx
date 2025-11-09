"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useAuth } from "@/context/AuthContext";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { API_ENDPOINTS } from "@/lib/api-config";
import KYCModal from "@/components/dashboard/KYCModal";

// --- INTERFACES ---
interface Provider {
  id: string;
  name: string;
  country: string;
  currency: string;
}

interface DepositApiData {
  success: boolean;
  txId?: string;
  message?: string;
  convertedAmount?: number;
  resolvedCurrency?: string;
  source?: string;
  error?: string;
}

interface DepositApiResponse {
  success: boolean;
  data: DepositApiData;
  message?: string;
}

const CURRENCIES = [
  { value: "ALGO", label: "ALGO" },
  { value: "USDC", label: "USDC" },
];

const DepositsPage = () => {
  const { loading, isAuthenticated, user } = useCurrentUser();
  const { refreshUser } = useAuth();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [formData, setFormData] = useState({
    amount: "",
    provider: "",
    phoneNumber: "",
    countryCode: "+266",
    currency: "USDC",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<DepositApiData | null>(null);
  const [showKYCModal, setShowKYCModal] = useState(false);

  // --- Effects ---

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
    // Show KYC modal based on user data from hook (which reflects the database via the hook's mechanism)
    console.log('KYC Check - loading:', loading, 'user:', user, 'kycVerified:', user?.kycVerified);
    if (!loading && user && !user.kycVerified) {
      console.log('Showing KYC modal because user.kycVerified is false');
      setShowKYCModal(true);
    } else if (!loading && user && user.kycVerified) {
      console.log('Not showing KYC modal because user.kycVerified is true');
    }
  }, [loading, user]);

  const getWalletAddress = () => {
    try {
      const dashboardData = localStorage.getItem("dashboardData");
      if (dashboardData) {
        const parsed = JSON.parse(dashboardData);
        if (parsed.wallets && parsed.wallets.length > 0) {
          return parsed.wallets[0].walletAddress;
        }
      }
    } catch (err) {
      console.error("Failed to get wallet address:", err);
    }
    return "7Y7A5SZANQLP3E6OGQCN57J4TYE6JU6QB4DSGBZRXRO47JMEVDVLAK7VGU";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // --- Submission Handler ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    // Initial local validation
    if (
      !formData.amount ||
      !formData.provider ||
      !formData.phoneNumber ||
      !formData.currency
    ) {
      setError("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    const walletId = getWalletAddress();
    if (!walletId) {
      setError("Wallet address not found. Please log in again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(API_ENDPOINTS.mobileMoney.deposit, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          walletId,
          amount: parseFloat(formData.amount),
          provider: formData.provider,
          phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
          asset: formData.currency,
        }),
      });

      const data: DepositApiResponse = await response.json();

      if (data.success && data.data && data.data.success) {
        setSuccess(data.data);
        setFormData({
          amount: "",
          provider: "",
          phoneNumber: "",
          countryCode: "+266",
          currency: "USDC",
        });
      } else {
        const errorMessage =
          data.data?.error ||
          data.message ||
          "Deposit failed. Please check details and try again.";

        // Server-side KYC validation failed
        if (errorMessage.toLowerCase().includes("kyc")) {
          setError(errorMessage);
          setShowKYCModal(true);
        } else {
          setError(errorMessage);
        }
      }
    } catch (err) {
      setError("A network error occurred. Please try again.");
      console.error("Deposit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerificationComplete = async () => {
    // Refresh the user data from the context to get the latest KYC status
    // This will update the user state without needing a full page reload
    console.log('KYC verification completed, refreshing user data...');
    try {
      await refreshUser();
      console.log('User data refreshed, closing modal');
      setShowKYCModal(false);
    } catch (error) {
      console.error("Failed to refresh user after KYC verification:", error);
      // Fallback to page reload if refresh fails
      window.location.reload();
    }
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

  // --- Render ---

  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Mobile Money Deposits
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Make a Deposit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Deposit Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="bg-green-50 border-green-300 text-green-800">
                    <AlertTitle>Deposit Successful! 🎉</AlertTitle>
                    <AlertDescription>
                      Transaction ID: **{success.txId}**
                      <br />
                      Message: {success.message}
                      <br />
                      Converted Amount: **{success.convertedAmount}{" "}
                      {success.resolvedCurrency}**
                    </AlertDescription>
                  </Alert>
                )}

                <div>
                  <Label htmlFor="amount">Amount ({formData.currency})</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={(e) =>
                      handleInputChange("amount", e.target.value)
                    }
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) =>
                      handleInputChange("currency", value)
                    }
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
                    onValueChange={(value) =>
                      handleInputChange("provider", value)
                    }
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
                  <div className="flex gap-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) =>
                        handleInputChange("countryCode", value)
                      }
                    >
                      <SelectTrigger className="w-28">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={"+266"}>+266 (LS)</SelectItem>
                        <SelectItem value={"+254"}>+254 (KE)</SelectItem>
                        <SelectItem value={"+255"}>+255 (TZ)</SelectItem>
                        <SelectItem value={"+256"}>+256 (UG)</SelectItem>
                        <SelectItem value={"+27"}>+27 (ZA)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
                >
                  {isSubmitting ? "Processing..." : "Make Deposit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deposit Status</CardTitle>
            </CardHeader>
            <CardContent>
              {!error && !success && (
                <p className="text-gray-700">
                  Fill out the form to make a deposit. Your transaction status
                  will appear here.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <KYCModal
        isOpen={showKYCModal}
        onClose={() => setShowKYCModal(false)}
        walletAddress={(() => {
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
        })()}
        onVerificationComplete={handleVerificationComplete}
      />
    </main>
  );
};

export default DepositsPage;