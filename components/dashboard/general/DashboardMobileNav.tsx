import { MenuIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { dashboardMenu } from '@/lib/constants'
import Link from 'next/link'

const DashboardMobileNav = () => {
    return (
        <main className='flex items-center justify-between w-full px-4'>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-emerald-900 ml-6 text-white md: mt-2 pb-6'>
                    <DropdownMenuLabel className=' pb-2'>
                        <Image src="/logo01.png" width={120} height={60} alt="Pawreedy Logo" className="" />
                    </DropdownMenuLabel>
                    {/* <DropdownMenuSeparator /> */}
                    <div className=''>
                        {dashboardMenu.map((item) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className="items-center md:pl-6 py-2 pl-3 p"
                            >
                                <DropdownMenuItem className="flex pl-3 gap-3 w-72 hover:bg-slate-600 mx-2 py-2 rounded-[5px] transition-all duration-500">
                                    <item.icon className={`shrink-0  text-${item.color}`} />
                                    <span>{item.label}</span>
                                </DropdownMenuItem>

                            </Link>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

        </main>
    )
}

export default DashboardMobileNav