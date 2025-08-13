import {
  Home,
  SmartphoneNfc,
  UserPlus,
  Wallet,
  UserRoundPen,
  HandCoins,
  FileStack,
  LayoutDashboardIcon,
  Landmark,
  Warehouse,
  BanknoteArrowDown,
  SendIcon as SendFundsIcon,
  Bell,
} from "lucide-react";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
    current: true
  },
  {
    id: 2,
    label: "Connect Wallet",
    href: "/wallet",
    icon: Wallet,
    current: false
  },
  {
    id: 3,
    label: "Contact",
    href: "/contact",
    icon: SmartphoneNfc,
    current: false
  },
  {
    id: 4,
    label: "About",
    href: "/about",
    icon: UserPlus,
    current: false
  },
];

export const dashboardMenu = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
    current: false,
    color: "#202020"
  },
  {
    id: 2,
    label: "Personal",
    href: "/dashboard/personal",
    icon: UserRoundPen,
    current: false,
    color: "#20283E"
  },
  {
    id: 3,
    label: "Payments",
    href: "/dashboard/payments",
    icon: HandCoins,
    current: false,
    color: "#25476A"

  },
  {
    id: 4,
    label: "History",
    href: "/dashboard/history",
    icon: FileStack,
    current: false,
    color: "#191C24"
  },
  {
    id: 5,
    label: "Banks",
    href: "/dashboard/banks",
    icon: Landmark,
    current: false,
    color: "#1E1E2C"
  },
  {
    id: 6,
    label: "Deposit",
    href: "/dashboard/deposit",
    icon: Warehouse,
    current: false,
    color: "#1E1E2C"
  },
  {
    id: 7,
    label: "Withdraw",
    href: "/dashboard/withdraw",
    icon: BanknoteArrowDown,
    current: false,
    color: "#1E1E2C"
  },
  {
    id: 8,
    label: "Send Funds",
    href: "/dashboard/withdraw",
    icon: SendFundsIcon,
    current: false,
    color: "#1E1E2C"
  },
  {
    id: 9,
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    current: false,
    color: "#1E1E2C"
  },
];