"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { API_ENDPOINTS } from "@/lib/api-config";
import { toast } from "sonner";
import KYCModal from "@/components/dashboard/KYCModal";

interface Asset {
  id: string;
  walletId: string;
  asset: string;
  amount: number;
  updatedAt: string;
}

const Page = () => {
  const { loading, isAuthenticated } = useCurrentUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    receiverWalletAddress: "",
    amount: "",
    asset: "",
    description: "",
  });
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [senderWalletId, setSenderWalletId] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, isAuthenticated, router]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("Authentication required");
          return;
        }

        // Get walletId from dashboard data stored in localStorage or context
        const dashboardDataString = localStorage.getItem("dashboardData");
        let walletId = "";
        if (dashboardDataString) {
          try {
            const dashboardData = JSON.parse(dashboardDataString);
            if (dashboardData.wallets && dashboardData.wallets.length > 0) {
              walletId = dashboardData.wallets[0].id;

              console.log("Using wallets from localStorage:", dashboardData.wallet);
              console.log("Using walletId from localStorage:", walletId);
            }
          } catch (e) {
            console.error("Failed to parse dashboardData from localStorage", e);
          }
        }

        if (!walletId) {
          toast.error("Wallet ID not found. Please visit dashboard first.");
          return;
        }

        const response = await fetch(
          API_ENDPOINTS.blockchainWallets.getAssets(walletId),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          toast.error(`Failed to fetch assets: ${response.status} ${response.statusText}`);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          toast.error("Server returned invalid response format");
          return;
        }

        const data = await response.json();
        if (data.success) {
          console.log(data);
          setSenderWalletId(walletId || "");
          setAssets(data.data.balances || []);
          if (data.data.balances && data.data.balances.length > 0) {
            setFormData((prev) => ({
              ...prev,
              asset: data.data.balances[0].asset,
            }));
          }
        } else {
          toast.error(data.message || "Failed to fetch assets");
        }
      } catch (error) {
        toast.error("An error occurred while fetching assets");
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchAssets();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check KYC status before proceeding
    const dashboardDataString = localStorage.getItem("dashboardData");
    if (dashboardDataString) {
      try {
        const dashboardData = JSON.parse(dashboardDataString);
        if (dashboardData.user && !dashboardData.user.kycVerified) {
          toast.error("KYC verification is required to send money. Please verify your identity first.");
          return;
        }
      } catch (e) {
        console.error("Failed to parse dashboardData for KYC check", e);
      }
    }

    setShowConfirm(true);
  };

  const handleConfirmSend = async () => {
    setShowConfirm(false);
    setLoadingSubmit(true);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const response = await fetch(API_ENDPOINTS.blockchainWallets.sendStablecoin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          senderWalletId,
          receiverWalletAddress: formData.receiverWalletAddress,
          amount: parseFloat(formData.amount),
          asset: formData.asset,
          description: formData.description,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Money sent successfully!");
        // Reset form
        setFormData({
          receiverWalletAddress: "",
          amount: "",
          asset: assets.length > 0 ? assets[0].asset : "",
          description: "",
        });
      } else {
        toast.error(data.message || "Failed to send money");
      }
    } catch (error) {
      toast.error("An error occurred while sending money");
      console.error(error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleCancelSend = () => {
    setShowConfirm(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 relative">
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Send Money</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sender Wallet ID is hidden and passed in code */}
            <input type="hidden" name="senderWalletId" value={senderWalletId} />

            <div>
              <Label htmlFor="receiverWalletAddress">Receiver Wallet Address</Label>
              <Input
                id="receiverWalletAddress"
                name="receiverWalletAddress"
                type="text"
                value={formData.receiverWalletAddress}
                onChange={handleInputChange}
                required
                placeholder="Enter receiver wallet address"
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={handleInputChange}
                required
                placeholder="Enter amount"
              />
            </div>

            <div>
              <Label htmlFor="asset">Asset</Label>
              <select
                id="asset"
                name="asset"
                value={formData.asset}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {assets.length === 0 && <option value="">No assets available</option>}
                {assets.map((asset) => (
                  <option key={asset.id} value={asset.asset}>
                    {asset.asset} (Balance: {asset.amount})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description (optional)"
              />
            </div>

            <Button type="submit" disabled={loadingSubmit} className="w-full">
              {loadingSubmit ? "Sending..." : "Send Money"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Confirm Transaction</h2>
            <p className="mb-2">Receiver Wallet Address: {formData.receiverWalletAddress}</p>
            <p className="mb-2">Amount: {formData.amount} {formData.asset}</p>
            {formData.description && <p className="mb-4">Description: {formData.description}</p>}
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={handleCancelSend}>Cancel</Button>
              <Button onClick={handleConfirmSend} disabled={loadingSubmit}>Confirm</Button>
            </div>
          </div>
        </div>
      )}
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
        onVerificationComplete={() => {
          // Refresh the page to update KYC status
          window.location.reload();
        }}
      />
    </div>
  );
};

export default Page;
