/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string, confirmPassword: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on app load
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsLoading(false);
        return;
      }

      // Verify token with your backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const userData = await res.json();
        setUser(userData.user);
      } else {
        // Token is invalid, remove it
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Store token and user data
    localStorage.setItem('authToken', data.token);
    setUser(data.user);
  };

  const forgotPassword = async (email: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/password/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log("Data: ",data);

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
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        forgotPassword,
        resetPassword,
        logout,
      }}
    >
      {children}
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