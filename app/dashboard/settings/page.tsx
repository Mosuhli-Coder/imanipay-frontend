"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Key, User, Shield } from "lucide-react";

// Password change schema
const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      "Password must contain uppercase, lowercase, number and special character"),
  confirmPassword: z.string().min(1, "Please confirm your password")
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function AccountSettingsPage() {
  const { user } = useCurrentUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showDangerZone, setShowDangerZone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onChangePassword = async (data: PasswordFormData) => {
    if (!user) return;

    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("Token retrieved:", token ? "Token exists" : "No token found");
      
      if (!token) {
        toast.error("Authentication token not found. Please log in again.");
        router.push("/login");
        return;
      }

      const response = await fetch(`/api/password/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned an invalid response format");
      }

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem("authToken");
          router.push("/login");
          return;
        }
        throw new Error(result.message || result.error || "Failed to change password");
      }

      toast.success("Password changed successfully");
      reset();
      
      // Close danger zone after successful change
      setShowDangerZone(false);
    } catch (error) {
      console.error("Password change error:", error);
      if (error instanceof SyntaxError) {
        toast.error("Server error: Invalid response format");
      } else {
        toast.error(error instanceof Error ? error.message : "Failed to change password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`/api/account/delete`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }

      toast.success("Account deleted successfully");
      localStorage.removeItem("authToken");
      router.push("/");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete account");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Your basic account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email Address</Label>
              <Input 
                type="email" 
                value={user?.email || ""} 
                disabled 
                className="mt-1 bg-gray-50 dark:bg-gray-800"
              />
            </div>
            <div>
              <Label>Full Name</Label>
              <Input 
                type="text" 
                value={user?.fullName || ""} 
                disabled 
                className="mt-1 bg-gray-50 dark:bg-gray-800"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => router.push("/dashboard/settings/profile")}
              className="mt-2"
            >
              Edit Profile Details
            </Button>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Change Password
            </CardTitle>
            <CardDescription>
              Update your password regularly to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onChangePassword)} className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  {...register("currentPassword")}
                  className="mt-1"
                />
                {errors.currentPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.currentPassword.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  {...register("newPassword")}
                  className="mt-1"
                />
                {errors.newPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.newPassword.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className="mt-1"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isLoading || !isDirty}
                className="w-full sm:w-auto"
              >
                {isLoading ? "Updating..." : "Change Password"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Manage your account security preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline" disabled>
                Enable 2FA (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>
              Irreversible and destructive actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                </div>
                <Button 
                  variant="destructive"
                  onClick={() => setShowDangerZone(!showDangerZone)}
                >
                  Delete Account
                </Button>
              </div>

              {showDangerZone && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Are you absolutely sure?</AlertTitle>
                  <AlertDescription className="space-y-4">
                    <p>
                      This action cannot be undone. This will permanently delete your account
                      and remove all your data from our servers.
                    </p>
                    <Button 
                      variant="destructive" 
                      onClick={handleDeleteAccount}
                      className="w-full sm:w-auto"
                    >
                      Yes, delete my account
                    </Button>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
