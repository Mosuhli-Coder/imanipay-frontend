"use client";

import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { API_ENDPOINTS } from "@/lib/api-config";
import { toast } from "sonner";
import KYCModal from "@/components/dashboard/KYCModal";

interface User {
  kycStatus: string;
  kycVerified: boolean;
}

interface Balance {
  asset: string;
  amount: number;
}

interface Wallet {
  id: string;
  walletAddress: string;
  status: string;
  balances: Balance[];
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  asset: string;
  status: string;
  description: string;
  createdAt: string;
  from: string;
  to: string;
  isSent: boolean;
  txLink: string;
}

interface DashboardData {
  user: User;
  wallets: Wallet[];
  recentTransactions: Transaction[];
}

const DashboardPage = () => {
  const { user, loading, isAuthenticated } = useCurrentUser();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false);

  const copyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard");
    } catch {
      toast.error("Failed to copy address");
    }
  };

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);



  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!isAuthenticated) return;

      setLoadingData(true);
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("Authentication required");
          return;
        }

        const response = await fetch(API_ENDPOINTS.userDashboard, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          toast.error(`Failed to fetch dashboard data: ${response.status}`);
          return;
        }

        const data = await response.json();
        setDashboardData(data);

        // Auto-show KYC modal if user is not verified
        if (data.user && !data.user.kycVerified) {
          setShowKYCModal(true);
        }
      } catch (error) {
        toast.error("An error occurred while fetching dashboard data");
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchDashboardData();
  }, [isAuthenticated]);

  if (loading || loadingData) {
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
        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Welcome, {user?.first_name || user?.fullName}!
        </h1>

        {/* KYC Status */}
        {dashboardData?.user && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>KYC Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-sm ${dashboardData.user.kycVerified ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                  {dashboardData.user.kycStatus}
                </span>
                {!dashboardData.user.kycVerified && (
                  <Button onClick={() => setShowKYCModal(true)} size="sm">
                    Verify KYC
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Wallets and Balances */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {dashboardData?.wallets.map((wallet) => (
            <Card key={wallet.id}>
              <CardHeader>
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <CardTitle className="max-w-full">Wallet: {wallet.walletAddress.length > 20 ? `${wallet.walletAddress.slice(0, 10)}...${wallet.walletAddress.slice(-10)}` : wallet.walletAddress}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => copyAddress(wallet.walletAddress)}>Copy</Button>
                    <span className={`px-2 py-1 rounded text-sm ${wallet.status === "ACTIVE" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                      {wallet.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Balances</h3>
                <div className="space-y-2">
                  {wallet.balances.map((balance, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{balance.asset}</span>
                      <span className="font-mono">{balance.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funds Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View and manage your overall balance across all assets
            </p>
            <Link href="/dashboard/funds/balance" className="text-blue-600 hover:text-blue-800 font-medium">
              Balance Overview
            </Link>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData?.recentTransactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{transaction.description}</p>
                      <p className="text-sm text-gray-600">
                        {transaction.isSent ? "Sent to" : "Received from"}: {transaction.isSent ? transaction.to : transaction.from}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.createdAt).toLocaleString()}
                      </p>
                      <a
                        href={transaction.txLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm underline"
                      >
                        View on Explorer
                      </a>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono ${transaction.isSent ? "text-red-600" : "text-green-600"}`}>
                        {transaction.isSent ? "-" : "+"}{transaction.amount} {transaction.asset}
                      </p>
                      <span className={`px-2 py-1 rounded text-sm ${transaction.status === "SUCCESS" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {dashboardData?.recentTransactions && dashboardData.recentTransactions.length > 3 && (
                <div className="pt-4">
                  <Link href="/dashboard/activity/transactions" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View More Transactions
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <KYCModal
        isOpen={showKYCModal}
        onClose={() => setShowKYCModal(false)}
        walletAddress={dashboardData?.wallets[0]?.walletAddress || ""}
      />
    </main>
  );
};

export default DashboardPage;
