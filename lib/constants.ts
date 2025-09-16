import { LucideIcon } from "lucide-react";
import {
  Home,
  // Wallet,
  FileStack,
  LayoutDashboard as LayoutDashboardIcon,
  Landmark,
  Bell,
  CreditCard,
  TrendingUp,
  // Settings,
  // HelpCircle,
  User,
} from "lucide-react";

export type NavItem = {
  id: number;
  name: string;
  icon: LucideIcon;
  path?: string;
  color?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

export const MAIN_MENU_ITEMS: NavItem[] = [
  {
    id: 1,
    name: "Home",
    icon: Home,
    path: "/",
  },
  // {
  //   id: 2,
  //   name: "Wallet",
  //   icon: Wallet,
  //   color: "#3B82F6",
  //   subItems: [
  //     { name: "Connect Wallet", path: "/wallet/connect" },
  //     { name: "My Wallets", path: "/wallet/my-wallets" },
  //     { name: "Wallet Settings", path: "/wallet/settings" },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Support",
  //   icon: HelpCircle,
  //   color: "#10B981",
  //   subItems: [
  //     { name: "Contact Us", path: "/support/contact" },
  //     { name: "Help Center", path: "/support/help" },
  //     { name: "About", path: "/support/about" },
  //     { name: "FAQ", path: "/support/faq", new: true },
  //   ],
  // },
];


export const DASHBOARD_MENU_ITEMS: NavItem[] = [
  {
    id: 1,
    name: "Overview",
    icon: LayoutDashboardIcon,
    path: "/dashboard",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "Account",
    icon: User,
    color: "#8B5CF6",
    subItems: [
      // { name: "Profile", path: "/dashboard/account/profile" },
      { name: "Personal Info", path: "/dashboard/settings/profile" },
      // { name: "Security", path: "/dashboard/account/security" },
      // { name: "Preferences", path: "/dashboard/account/preferences" },
    ],
  },
  {
    id: 3,
    name: "Transactions",
    icon: CreditCard,
    color: "#06B6D4",
    subItems: [
      { name: "Send Money", path: "/dashboard/transactions/send" },
      // { name: "Request Money", path: "/dashboard/transactions/request", new: true },
      { name: "Payment History", path: "/dashboard/transactions/history" },
      // { name: "Recurring Payments", path: "/dashboard/transactions/recurring", pro: true },
    ],
  },
  {
    id: 4,
    name: "Banking",
    icon: Landmark,
    color: "#DC2626",
    subItems: [
      { name: "Linked Banks", path: "/dashboard/banking/banks" },
      { name: "Add Bank Account", path: "/dashboard/banking/add-bank" },
      { name: "Bank Transfers", path: "/dashboard/banking/transfers" },
      { name: "Direct Deposits", path: "/dashboard/banking/deposits", pro: true },
    ],
  },
  {
    id: 5,
    name: "Funds",
    icon: TrendingUp,
    color: "#059669",
    subItems: [
      // { name: "Deposit", path: "/dashboard/funds/deposit" },
      { name: "Withdraw", path: "/dashboard/funds/withdraw" },
      { name: "Balance Overview", path: "/dashboard/funds/balance" },
      // { name: "Investment Options", path: "/dashboard/funds/investments", pro: true },
    ],
  },
  {
    id: 6,
    name: "Activity",
    icon: FileStack,
    color: "#7C3AED",
    subItems: [
      { name: "Transaction History", path: "/dashboard/activity/transactions" },
      // { name: "Statements", path: "/dashboard/activity/statements" },
      // { name: "Tax Documents", path: "/dashboard/activity/tax-docs", pro: true },
      // { name: "Export Data", path: "/dashboard/activity/export" },
    ],
  },
  {
    id: 7,
    name: "Notifications",
    icon: Bell,
    path: "/dashboard/notifications",
    color: "#F59E0B",
  },
  // {
  //   id: 8,
  //   name: "Settings",
  //   icon: Settings,
  //   color: "#6B7280",
  //   subItems: [
  //     { name: "Account Settings", path: "/settings", new: true },
  //     { name: "App Settings", path: "/dashboard/settings/app" },
  //     { name: "Privacy", path: "/dashboard/settings/privacy" },
  //     { name: "Billing", path: "/dashboard/settings/billing", pro: true },
  //     { name: "API Access", path: "/dashboard/settings/api", pro: true },
  //   ],
  // },
];