"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
    const { user, loading, isAuthenticated } = useCurrentUser();

    useEffect(() => {
        // Only redirect after loading is complete and user is not authenticated
        if (!loading && !isAuthenticated) {
            redirect("/login"); // or "/" depending on your preference
        }
    }, [loading, isAuthenticated]);

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    // If not authenticated, return null (redirect will handle navigation)
    if (!isAuthenticated) {
        return null;
    }

    return (
        <main>
            <div className='flex-1 overflow-auto relative z-10'>
                <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                    <h1 className="text-2xl font-bold mb-6">
                        Welcome, {user?.first_name || user?.fullName}!
                    </h1>

                    {/* CHARTS */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {/* Your dashboard content here */}
                    </div>
                </main>
            </div>
        </main>
    );
};

export default DashboardPage;