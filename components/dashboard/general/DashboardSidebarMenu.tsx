"use client";

import { dashboardMenu } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const DashboardSidebarMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname(); // Get the current path

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-[#01403A] text-white backdrop-blur-md px-4 flex flex-col shadow-sm shadow-violet-950">
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2"
        >
          <div className="flex items-center justify-start -space-y-6 space-x-2">
            <Menu size={24} className="rounded-full hover:text-white transition-colors" />
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image src="/images/Logo.png" width={120} height={60} alt="Pawreedy Logo" className="" />
              </motion.div>
            )}
          </div>
        </motion.button>

        <nav className="mt-0 flex-grow">
          {dashboardMenu.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`flex items-center p-4 text-sm font-medium rounded-lg mb-2 transition-colors ${
                  pathname === item.href ? "bg-emerald-800" : "hover:bg-emerald-900"
                }`}
              >
                <item.icon
                  size={20}
                  style={{
                    color: "white",
                    minWidth: "20px",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default DashboardSidebarMenu;