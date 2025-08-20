"use client";
import { useAuth } from "@/context/AuthContext";

// Extended user type for the component
interface ExtendedUser {
    id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    first_name: string;
    last_name: string;
    image: string | null;
}

interface UseCurrentUserReturn {
    user: ExtendedUser | null;
    loading: boolean;
    isAuthenticated: boolean;
}

export function useCurrentUser(): UseCurrentUserReturn {
    const { user, isLoading, isAuthenticated } = useAuth();

    // Helper function to parse full name
    const parseFullName = (fullName: string | undefined) => {
        if (!fullName) return { first_name: "", last_name: "" };
        const nameParts = fullName.trim().split(" ");
        const first_name = nameParts[0] || "";
        const last_name = nameParts.slice(1).join(" ") || ""; // Handle multiple last names
        return { first_name, last_name };
    };

    const extendedUser: ExtendedUser | null = user
        ? {
            ...user,
            ...parseFullName(user.fullName),
            image: null, // You can extend this later when you add profile images
        }
        : null;

    return {
        user: extendedUser,
        loading: isLoading, // Make sure this matches the AuthContext property
        isAuthenticated,
    };
}