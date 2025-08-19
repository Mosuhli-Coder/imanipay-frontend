"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PublicRoute = ({ children, redirectTo = '/dashboard' }: PublicRouteProps) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {

      if (!isLoading && isAuthenticated && user) {
        router.replace(redirectTo);
      }
    }, 100);

    return () => clearTimeout(redirectTimer);
  }, [isLoading, isAuthenticated, user, router, redirectTo]);


  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-lg mb-4">Loading...</div>
        <div className="text-sm text-gray-500">Checking authentication...</div>
      </div>
    );
  }


  if (!isLoading && isAuthenticated && user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-lg mb-4">Redirecting...</div>
        <div className="text-sm text-gray-500">You are already logged in.</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PublicRoute;