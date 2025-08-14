"use client";

import { useAuth } from "@/context/AuthContext"; 

export function useCurrentUser() {
    const { user, isLoading } = useAuth();

    return {
        user: user
            ? {
                ...user,
                first_name: user.fullName?.split(" ")[0] || "",
                last_name: user.fullName?.split(" ")[1] || "",
                image: null,
            }
            : null,
        loading: isLoading,
        error: !isLoading && !user ? "Not authenticated" : null,
    };
}
