import {
  Home,
  SmartphoneNfc,
  UserPlus,
  Wallet,
  // Calendar,
  // Box,
  Users,
  // Star,
  LayoutDashboardIcon
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
    label: "Connect Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
    current: false,
    color: "#20283E"
  },
  // {
  //   id: 3,
  //   label: "Category",
  //   href: "/dashboard/categories",
  //   icon: Box,
  //   current: false,
  //   color: "#25476A"

  // },
  // {
  //   id: 4,
  //   label: "Orders",
  //   href: "/dashboard/orders",
  //   icon: Calendar,
  //   current: false,
  //   color: "#191C24"
  // },
  {
    id: 5,
    label: "Users",
    href: "/dashboard/users",
    icon: Users,
    current: false,
    color: "#1E1E2C"
  },
];