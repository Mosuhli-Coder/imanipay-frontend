"use client";

// import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
// import Link from "next/link";
import React, { useState } from "react";
import {
    X,
    Menu,
    MoreHorizontal,
} from "lucide-react";

const AppHeader: React.FC = () => {
    const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
    const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();


    const handleToggle = () => {
        if (window.innerWidth >= 1024) {
            toggleSidebar();
        } else {
            toggleMobileSidebar();
        }
    };

    const toggleApplicationMenu = () => {
        setApplicationMenuOpen(!isApplicationMenuOpen);
    };



    return (
        <header className="sticky top-0 flex w-full bg-gradient-to-r from-teal-700 to-emerald-700 border-b border-teal-600/30 z-99999 lg:border-b shadow-sm">
            <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
                <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-teal-600/30 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
                    <button
                        className="items-center justify-center w-10 h-10 text-white border-white/30 rounded-lg z-99999 lg:flex lg:h-11 lg:w-11 lg:border"
                        onClick={handleToggle}
                        aria-label="Toggle Sidebar"
                    >
                        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* <Link href="/" className="lg:hidden">
                        <h1 className="font-bold text-2xl">Rorisang Moerane</h1>
                    </Link> */}

                    <button
                        onClick={toggleApplicationMenu}
                        className="flex items-center justify-center w-10 h-10 text-white rounded-lg z-99999 hover:bg-white/20 lg:hidden"
                    >
                        <MoreHorizontal className="w-5 h-5" />
                    </button>


                </div>

                <div
                    className={`${isApplicationMenuOpen ? "flex" : "hidden"
                        } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
                >
                    <div className="flex items-center gap-2 2xsm:gap-3">
                        {/* <NotificationDropdown /> */}
                    </div>
                    <UserDropdown />
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
