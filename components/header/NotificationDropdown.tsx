"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function NotificationDropdown() {
    const [notifying, setNotifying] = useState(true);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full h-11 w-11"
                    onClick={() => setNotifying(false)}
                >
                    {notifying && (
                        <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400">
                            <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
                        </span>
                    )}
                    <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
                            fill="currentColor"
                        />
                    </svg>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-[350px] rounded-2xl p-3 sm:w-[361px]"
            >
                <div className="flex items-center justify-between pb-3 mb-3 border-b">
                    <h5 className="text-lg font-semibold">Notification</h5>
                    <DropdownMenuItem>
                        <X className="h-4 w-4" />
                    </DropdownMenuItem>
                </div>

                <div className="max-h-[400px] overflow-y-auto">
                    {/* Notification Items */}
                    {notifications.map((notification) => (
                        <DropdownMenuItem
                            key={notification.id}
                            className="flex gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <div className="relative h-10 w-10 rounded-full">
                                <Image
                                    src={notification.avatar}
                                    alt={notification.user}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <span
                                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${notification.status === "online"
                                            ? "bg-green-500"
                                            : "bg-gray-400"
                                        }`}
                                />
                            </div>
                            <div>
                                <p className="text-sm">
                                    <span className="font-medium">{notification.user}</span>{" "}
                                    {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 flex items-center gap-2">
                                    <span>Project</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                    <span>{notification.time}</span>
                                </p>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </div>

                <Link
                    href="/notifications"
                    className="block w-full mt-3 text-sm font-medium text-center border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    View All Notifications
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

// Example notifications data
const notifications = [
    {
        id: 1,
        user: "Terry Franci",
        avatar: "/images/user/user-02.jpg",
        message: "requests permission to change Project - Nganter App",
        time: "5 min ago",
        status: "online",
    },
    // Add more notifications...
];