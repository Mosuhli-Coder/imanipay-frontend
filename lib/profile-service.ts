"use client";

import { API_BASE_URL } from "@/lib/api-config";

export interface ProfileData {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

class ProfileService {
  private cache: ProfileData | null = null;
  private pendingRequest: Promise<ProfileData> | null = null;

  async getProfile(): Promise<ProfileData> {
    // Return cached data if available
    if (this.cache) {
      return this.cache;
    }

    // Return existing pending request if one is in progress
    if (this.pendingRequest) {
      return this.pendingRequest;
    }

    // Create new request
    this.pendingRequest = this.fetchProfile()
      .then(data => {
        this.cache = data;
        this.pendingRequest = null;
        return data;
      })
      .catch(error => {
        this.pendingRequest = null;
        throw error;
      });

    return this.pendingRequest;
  }

  async updateProfile(data: Partial<ProfileData>): Promise<ProfileData> {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const updatedData = await response.json();
    this.cache = updatedData; // Update cache with new data
    return updatedData;
  }

  private async fetchProfile(): Promise<ProfileData> {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("No authentication token found");
    }

    console.log("Fetching profile from API with token:", token);
    const response = await fetch(`${API_BASE_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    console.log("Response status:", response.status);
    const responseData = await response.json();
    console.log("Response body:", responseData);
    
    if (!response.ok) {
        throw new Error("Failed to fetch profile");
    }

    return responseData.data; // Ensure we return the correct data structure
}


  clearCache() {
    this.cache = null;
  }
}

export const profileService = new ProfileService();
