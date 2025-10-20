"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/lib/api-config";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Copy, CheckCircle } from "lucide-react";

interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletAddress: string;
  onVerificationComplete?: () => void; // Callback when verification is complete
}

const KYCModal: React.FC<KYCModalProps> = ({ 
  isOpen, 
  onClose, 
  walletAddress,
  onVerificationComplete 
}) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check KYC status periodically when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const checkKYCStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) return;

        const res = await fetch(API_ENDPOINTS.user.profile, { // Adjust endpoint as needed
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
          },
        });

        if (res.ok) {
          const data = await res.json();
          // Check if user is verified
          if (data.kycVerified || data.kycStatus === 'VERIFIED') {
            toast.success("Verification completed successfully!");
            onVerificationComplete?.();
            onClose();
          }
        }
      } catch (error) {
        console.error("Error checking KYC status:", error);
      }
    };

    // Check immediately
    checkKYCStatus();

    // Then check every 5 seconds
    const interval = setInterval(checkKYCStatus, 5000);

    return () => clearInterval(interval);
  }, [isOpen, onClose, onVerificationComplete]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setIsCopied(true);
      toast.success("Wallet address copied!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log("Clipboard copy error:", error);
      toast.error("Failed to copy address");
    }
  };

  const startKyc = async () => {
    try {
      setIsLoading(true);
      
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      // Decode token to get user ID
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      const decoded = JSON.parse(jsonPayload);
      const userId = decoded.userId || decoded.id || decoded.sub;

      if (!userId) {
        toast.error("Invalid token format");
        return;
      }

      console.log("User ID:", userId);

      const res = await fetch(API_ENDPOINTS.kyc.start, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to start verification");
        return;
      }
      
      const data = await res.json();
      console.log("KYC start response:", data);
      
      if (!data.success || !data.inquiryId) {
        toast.error("Failed to start verification");
        return;
      }
      
      // Open verification in new tab
      window.open(
        `https://withpersona.com/verify?inquiry-id=${data.inquiryId}`,
        '_blank'
      );
      
      toast.success("Verification opened in new tab. Keep this window open to copy your address if needed.");
    } catch (error) {
      toast.error("An error occurred while starting verification");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
    router.push("/dashboard");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 border border-blue-200 dark:border-slate-700">
        <h2 className="text-2xl mb-4 font-bold text-center text-gray-900 dark:text-white">
          Verify your identity
        </h2>
        
        <div className="flex flex-col items-center justify-center">
          {/* Important Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6 w-full">
            <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-2">
              ⚠️ Important: Copy your wallet address
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              You&apos;ll need this address during verification. The verification will open in a new tab, so you can return here to copy it if needed.
            </p>
          </div>

          {/* Wallet Address Display */}
          <div className="w-full mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Wallet Address
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 font-mono text-sm text-gray-900 dark:text-gray-100 overflow-x-auto whitespace-nowrap">
                {walletAddress}
              </div>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="icon"
                className="shrink-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                {isCopied ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-sm">
            Click below to start the verification process. A new tab will open for verification.
          </p>
          
          <Button
            onClick={startKyc}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Starting verification..." : "Start Verification"}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={isLoading}
            className="w-full mt-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-800/50 disabled:opacity-50"
          >
            Cancel
          </Button>

          {/* Status indicator */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
            Checking verification status...
          </p>
        </div>
      </div>
    </div>
  );
};

export default KYCModal;