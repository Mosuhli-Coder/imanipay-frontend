"use client";

import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { API_ENDPOINTS } from "@/lib/api-config";
import { toast } from "sonner";

interface Transaction {
  id: string;
  senderWalletId: string | null;
  receiverWalletId: string | null;
  amount: number;
  asset: string;
  type: string;
  status: string;
  description: string;
  createdAt: string;
  senderWallet?: {
    walletAddress: string;
  };
  receiverWallet?: {
    walletAddress: string;
  };
}

const TransactionsPage = () => {
  const { loading, isAuthenticated } = useCurrentUser();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingData, setLoadingData] = useState(false);
  const [walletId, setWalletId] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);

  // Fetch wallet ID first
  useEffect(() => {
    const fetchWalletId = async () => {
      if (!isAuthenticated) return;

      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      try {
        // Try to get from localStorage first
        const dashboardDataString = localStorage.getItem("dashboardData");
        if (dashboardDataString) {
          const dashboardData = JSON.parse(dashboardDataString);
          if (dashboardData.wallets && dashboardData.wallets.length > 0) {
            setWalletId(dashboardData.wallets[0].id);
            return;
          }
        }

        // If not in localStorage, fetch from API
        // Replace with your actual dashboard/wallet endpoint
        const response = await fetch(API_ENDPOINTS.userDashboard, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          toast.error("Failed to fetch wallet information");
          return;
        }

        const data = await response.json();
        if (data.success && data.data.wallets && data.data.wallets.length > 0) {
          setWalletId(data.data.wallets[0].id);
          // Optionally save to localStorage for future use
          localStorage.setItem("dashboardData", JSON.stringify(data.data));
        } else {
          toast.error("No wallets found. Please create a wallet first.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching wallet information");
        console.error(error);
      }
    };

    fetchWalletId();
  }, [isAuthenticated]);

  // Fetch transactions once we have walletId
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!walletId) return;

      setLoadingData(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      try {
        const response = await fetch(
          API_ENDPOINTS.blockchainWallets.getTransactions(walletId, page, 5),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          toast.error(`Failed to fetch transactions: ${response.status}`);
          return;
        }

        const data = await response.json();
        if (data.success) {
          setTransactions(data.data.transactions);
          setTotalPages(data.data.pagination.pages);
        } else {
          toast.error(data.message || "Failed to fetch transactions");
        }
      } catch (error) {
        toast.error("An error occurred while fetching transactions");
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchTransactions();
  }, [walletId, page]);

  if (loading || (loadingData && !walletId)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Transaction History</h1>

        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.length === 0 ? (
                <p className="text-gray-500">No transactions found.</p>
              ) : (
                transactions.map((transaction) => (
                  <div key={transaction.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{transaction.description}</p>
                        <p className="text-sm text-gray-600">
                          {transaction.type === "DEBIT" ? "Sent to" : "Received from"}:{" "}
                          {transaction.type === "DEBIT"
                            ? transaction.receiverWallet?.walletAddress || ""
                            : transaction.senderWallet?.walletAddress || ""}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(transaction.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-mono ${
                            transaction.type === "DEBIT"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {transaction.type === "DEBIT" ? "-" : "+"}
                          {transaction.amount} {transaction.asset}
                        </p>
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            transaction.status === "SUCCESS"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="self-center">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </CardContent>
        </Card>
      </main>
    </main>
  );
};

export default TransactionsPage;