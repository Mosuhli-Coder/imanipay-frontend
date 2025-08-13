"use client"
import { Search, UserIcon, LogOut, User, Bell, ChevronDown } from "lucide-react";
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

                {/* Notifications and User Profile */}
                <div className="hidden md:flex justify-center"></div>

                {/* User profile dropdown with notifications */}
                <div className="flex items-center justify-end gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>

                    {/* User profile dropdown */}
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    {user?.fullName?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
                                </div>
                                <div className="text-left">
                                    <span className="text-sm font-medium text-gray-700 block">
                                        {user?.fullName || user?.email}
                                    </span>
                                    <span className="text-xs text-gray-500">Personal Account</span>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-2 mt-2 min-w-56 border">
                                <DropdownMenuItem className="p-3 hover:bg-gray-100 rounded cursor-pointer">
                                    <div className="flex items-center gap-3 w-full">
                                        <User size={16} />
                                        <div>
                                            <p className="font-medium">Profile Settings</p>
                                            <p className="text-xs text-gray-500">Manage your account</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3 hover:bg-gray-100 rounded cursor-pointer">
                                    <div className="flex items-center gap-3 w-full">
                                        <Bell size={16} />
                                        <div>
                                            <p className="font-medium">Notifications</p>
                                            <p className="text-xs text-gray-500">View all notifications</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <div className="border-t my-2"></div>
                                <DropdownMenuItem className="p-3 hover:bg-gray-100 rounded cursor-pointer">
                                    <div className="flex items-center gap-3 w-full">
                                        <LogOut size={16} />
                                        <button 
                                            className="text-left text-red-600 hover:text-red-700"
                                            onClick={logout}
                                        >
                                            Sign Out
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
                {/* Mobile user info with notifications */}
                <div className="flex items-center gap-3">
                    <button className="relative p-2">
                        <Bell className="w-5 h-5 text-white" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>
                    {isAuthenticated && (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                {user?.fullName?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
                            </div>
                            <span className="text-sm font-medium truncate max-w-24">
                                {user?.fullName?.split(' ')[0] || user?.email}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
