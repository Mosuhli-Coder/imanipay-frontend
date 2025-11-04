"use client";

import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
// import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
// import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
    X,
    Menu,
    MoreHorizontal,
    Search,
} from "lucide-react";

const AppHeader: React.FC = () => {
    const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
    const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
    const inputRef = useRef<HTMLInputElement>(null);

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

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header className="sticky top-0 flex w-full bg-white border-teal-200 z-99999 dark:border-[#121212] dark:bg-[#0A0A0A] lg:border-b shadow-sm">
            <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
                <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-[#121212] sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
                    <button
                        className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-[#121212] lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
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
                        className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
                    >
                        <MoreHorizontal className="w-5 h-5" />
                    </button>

                    <div className="hidden lg:block">
                        <form>
                            <div className="relative">
                                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search or type command..."
                                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-[#121212] dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                                />
                                {/* <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-[#121212] dark:bg-white/[0.03] dark:text-gray-400">
                                    <span> ⌘ </span>
                                    <span> K </span>
                                </button> */}
                            </div>
                        </form>
                    </div>
                </div>

                <div
                    className={`${isApplicationMenuOpen ? "flex" : "hidden"
                        } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
                >
                    <div className="flex items-center gap-2 2xsm:gap-3">
                        <ThemeToggleButton />
                        {/* <NotificationDropdown /> */}
                    </div>
                    <UserDropdown />
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
