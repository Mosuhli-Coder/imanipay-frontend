export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    forgotPassword: `${API_BASE_URL}/password/forgot-password`,
    resetPassword: `${API_BASE_URL}/password/reset-password`,
    verify: `${API_BASE_URL}/auth/verify`,
    verifyOtp: `${API_BASE_URL}/auth/verify-otp`,
  },
  blockchainWallets: {
    sendStablecoin: `${API_BASE_URL}/blockchain-wallets/send-stablecoin`,
    getAssets: (walletId: string) => `${API_BASE_URL}/blockchain-wallets/${walletId}/assets`,
    getTransactions: (walletId: string, page?: number, limit?: number) => `${API_BASE_URL}/blockchain-wallets/${walletId}/transactions?page=${page || 1}&limit=${limit || 10}`,
  },
  userDashboard: `${API_BASE_URL}/user/dashboard`,
  wallets: {
    balance: `${API_BASE_URL}/wallets/balance`,
  },
  mobileMoney: {
    deposit: `${API_BASE_URL}/mobile-money/deposit`,
    providers: `${API_BASE_URL}/mobile-money/providers`,
    withdraw: `${API_BASE_URL}/mobile-money/withdraw`,
  },
  kyc: {
    start: `${API_BASE_URL}/kyc/persona/start`,
  },
  user: {
    profile: `${API_BASE_URL}/profile`,
  },
};
