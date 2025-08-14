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
};
