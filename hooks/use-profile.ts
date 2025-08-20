"use client";

import { useState, useEffect, useCallback } from "react";
import { profileService, ProfileData } from "@/lib/profile-service";

interface UseProfileReturn {
  profile: ProfileData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateProfile: (data: Partial<ProfileData>) => Promise<void>;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
        setIsLoading(true);
        setError(null);
        console.log("Fetching profile...");
        const data = await profileService.getProfile();
        console.log("Profile data fetched:", data);
        setProfile(data);
    } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch profile");
    } finally {
        setIsLoading(false);
    }
}, []);


  const updateProfile = useCallback(async (data: Partial<ProfileData>) => {
    try {
      const updatedData = await profileService.updateProfile(data);
      setProfile(updatedData);
    } catch (err) {
      throw err instanceof Error ? err : new Error("Failed to update profile");
    }
  }, []);

  const refetch = useCallback(async () => {
    profileService.clearCache(); // Clear cache to force fresh fetch
    await fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    isLoading,
    error,
    refetch,
    updateProfile,
  };
}
