"use client";

import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
}

const TransactionsPage = () => {
  const { loading, isAuthenticated } = useCurrentUser();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);

  useEffect(() => {
    const dashboardDataString = localStorage.getItem("dashboardData");
    if (dashboardDataString) {
      try {
        const dashboardData = JSON.parse(dashboardDataString);
        if (dashboardData.recentTransactions) {
          setTransactions(dashboardData.recentTransactions);
        }
      } catch (e) {
        console.error("Failed to parse dashboardData from localStorage", e);
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

  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>

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
                          {transaction.isSent ? "Sent to" : "Received from"}: {transaction.isSent ? transaction.to : transaction.from}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(transaction.createdAt).toLocaleString()}
                        </p>
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
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </main>
  );
};

export default TransactionsPage;
