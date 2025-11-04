"use client";

import { User } from "lucide-react";
import Link from "next/link";

export default function ProfileHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Profile Settings
          </h1>
          <p className="text-gray-600">
            Update your personal information and contact details
          </p>
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <Link href="/dashboard/settings/profile">
            <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium">
              Personal Information
            </button>
          </Link>
          <Link href="/dashboard/settings">
            <button className="py-2 px-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Account Settings
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
