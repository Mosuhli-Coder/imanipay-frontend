/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/lib/api-config';

interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  kycVerified: boolean;
  kycStatus?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string, confirmPassword: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Helper function to decode JWT and extract user data
  const decodeUserFromToken = (token: string): User | null => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (payload.exp && payload.exp < currentTime) {
        return null;
      }

      return {
        id: payload.userId,
        email: payload.email,
        fullName: payload.fullName,
        phoneNumber: payload.phoneNumber,
        kycVerified: payload.kycVerified || false,
        kycStatus: payload.kycStatus || undefined
      };
    } catch (error) {
      console.error('❌ Failed to decode JWT:', error);
      return null;
    }
  };

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      // Decode token to get user data
      const userData = decodeUserFromToken(token);

      if (userData) {
        setUser(userData);
      } else {
        localStorage.removeItem('authToken');
        setUser(null);
      }
    } catch {
      localStorage.removeItem('authToken');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || 'Login failed');
      }

      // Check if we have accessToken
      if (!data.accessToken) {
        throw new Error('No access token received');
      }

      localStorage.setItem('authToken', data.accessToken);

      // Decode user data from the token
      const userData = decodeUserFromToken(data.accessToken);

      if (userData) {
        setUser(userData);
      } else {
        throw new Error('Failed to decode user data from token');
      }
    } catch (error: any) {
      // Clean up on error
      localStorage.removeItem('authToken');
      setUser(null);
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/password/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Failed to send reset email');
    }
  };

  const resetPassword = async (token: string, newPassword: string, confirmPassword: string) => {
    if (newPassword !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (newPassword.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/password/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
        newPassword,
        confirmPassword
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || data.message || 'Failed to reset password');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('dashboardData');
    localStorage.removeItem('dashboardDataTimestamp');
    setUser(null);
    router.push('/');
  };

  const refreshUser = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setUser(null);
        return;
      }

      // Decode token to get updated user data
      const userData = decodeUserFromToken(token);
      console.log('refreshUser - decoded userData:', userData);
      if (userData) {
        setUser(userData);
      } else {
        localStorage.removeItem('authToken');
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  };

  const refreshToken = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setUser(null);
        return;
      }

      // Call the new KYC status endpoint to get updated token
      const res = await fetch(API_ENDPOINTS.kyc.status, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.accessToken) {
          // Store the new token
          localStorage.setItem('authToken', data.accessToken);

          // Decode and update user data
          const userData = decodeUserFromToken(data.accessToken);
          if (userData) {
            setUser(userData);
          }
        }
      }
    } catch (error) {
      console.error('Failed to refresh token:', error);
    }
  };

  // Debug current auth state
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        forgotPassword,
        resetPassword,
        logout,
        refreshUser,
        refreshToken,
      }}
    >
      <div suppressHydrationWarning>
        {children}
      </div>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}