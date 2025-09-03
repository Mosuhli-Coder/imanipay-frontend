"use client";

import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { API_ENDPOINTS } from "@/lib/api-config";
import { toast } from "sonner";

interface Balance {
  asset: string;
  amount: number;
}

const BalanceOverviewPage = () => {
  const { loading, isAuthenticated } = useCurrentUser();
  const [balances, setBalances] = useState<Balance[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!isAuthenticated) return;

      setLoadingData(true);
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("Authentication required");
          return;
        }

        const response = await fetch(API_ENDPOINTS.wallets.balance, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          toast.error(`Failed to fetch balances: ${response.status}`);
          return;
        }

        const data = await response.json();
        if (data.balance) {
          setBalances(data.balance);
        } else {
          toast.error("Invalid balance data received");
        }
      } catch (error) {
        toast.error("An error occurred while fetching balances");
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchBalances();
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
        <h1 className="text-2xl font-bold mb-6">Balance Overview</h1>

        <Card>
          <CardHeader>
            <CardTitle>Your Balances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {balances.length === 0 ? (
                <p className="text-gray-500">No balances found.</p>
              ) : (
                balances.map((balance, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4 last:border-b-0">
                    <div>
                      <p className="font-semibold text-lg">{balance.asset}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xl text-green-600">
                        {balance.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </main>
  );
};

export default BalanceOverviewPage;
