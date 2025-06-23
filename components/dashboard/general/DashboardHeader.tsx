"use client"
import { Search, UserIcon, LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import DashboardMobileNav from "./DashboardMobileNav";
import { useAuth } from "@/context/AuthContext"; 

const DashboardHeader = () => {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <div className="z-10 flex flex-col gap-2 w-full">
            {/* Top bar for larger screens */}
            <div className="hidden md:grid md:grid-cols-3 items-center bg-white p-4 rounded-md shadow-md">
                {/* Search input */}
                <div className="flex items-center bg-slate-100 rounded-full p-2 px-4 gap-2 w-full">
                    <Search className="text-gray-500" />
                    <input
                        type="text"
                        className="bg-slate-100 outline-none w-full placeholder-gray-500"
                        placeholder="Search Dashboard..."
                    />
                </div>

                {/* Placeholder for center content if needed */}
                <div className="hidden md:flex justify-center"></div>

                {/* User profile dropdown */}
                <div className="flex items-center justify-end">
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    {user?.fullName?.charAt(0)?.toUpperCase() || 'U'}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {user?.fullName || user?.email}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-2 mt-2 min-w-48 border">
                                <DropdownMenuItem className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <div className="flex items-center gap-2 w-full">
                                        <User size={16} />
                                        <button className="text-left">Profile</button>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <div className="flex items-center gap-2 w-full">
                                        <LogOut size={16} />
                                        <button 
                                            className="text-left text-red-600 hover:text-red-700"
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center gap-2 px-4">
                            <UserIcon size={24} className="text-gray-500" />
                            <span className="text-sm text-gray-500">Not logged in</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation for smaller screens */}
            <div className="md:hidden h-20 bg-violet-950 text-white flex items-center justify-between px-4 shadow-lg rounded-md">
                <DashboardMobileNav />
                {/* Mobile user info */}
                {isAuthenticated && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {user?.fullName?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <span className="text-sm font-medium truncate max-w-24">
                            {user?.fullName?.split(' ')[0] || user?.email}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHeader;