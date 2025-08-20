"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User, Settings, Info, LogOut } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";

export default function UserDropdown() {
    const { user, loading, error } = useCurrentUser();

    if (loading) {
        return (
            <div className="flex items-center gap-2 p-2">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-2 text-red-500 text-sm">
                Error loading user data
            </div>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        {user?.image ? (
                            <Image
                                src={user.image}
                                alt={user.first_name || "User avatar"}
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        ) : (
                            <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <User className="h-5 w-5 text-gray-500" />
                            </div>
                        )}
                    </div>

                    <span className="font-medium text-sm truncate max-w-[120px]">
                        {user?.first_name} {user?.last_name}
                    </span>

                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-56"
                align="end"
                sideOffset={8}
            >
                <DropdownMenuLabel>
                    <p className="text-sm font-medium">
                        {user?.first_name} {user?.last_name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                        {user?.email || "No email"}
                    </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href="/settings/profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Edit profile
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Account settings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href="/support" className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Support
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild className="text-red-600 dark:text-red-400">
                    <Link href="/api/auth/signout" className="flex items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        Sign out
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
