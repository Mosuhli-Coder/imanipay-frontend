"use client";

import { useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransfersPage = () => {
  const { loading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect("/login");
    }
  }, [loading, isAuthenticated]);

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
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Bank Transfers</h1>

        <Card>
          <CardHeader>
            <CardTitle>Under Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              This page is currently under development. Functionality will be added soon.
            </p>
          </CardContent>
        </Card>
      </main>
    </main>
  );
};

export default TransfersPage;
