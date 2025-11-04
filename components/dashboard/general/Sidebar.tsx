"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { ChevronDownIcon, MoreHorizontal } from "lucide-react";
import { MAIN_MENU_ITEMS, DASHBOARD_MENU_ITEMS, NavItem } from "@/lib/constants";

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const pathname = usePathname();

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: "main" | "dashboard";
        index: number;
    } | null>(null);

    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const isActive = useCallback((path: string) => path === pathname, [pathname]);
    const isExpansionState = isExpanded || isHovered || isMobileOpen;

    // Calculate submenu heights when they open
    useEffect(() => {
        if (openSubmenu) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            const element = subMenuRefs.current[key];
            if (element) {
                const height = element.scrollHeight;
                setSubMenuHeight(prev => ({ ...prev, [key]: height }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (index: number, menuType: "main" | "dashboard") => {
        setOpenSubmenu((prevOpenSubmenu) => {
            if (
                prevOpenSubmenu &&
                prevOpenSubmenu.type === menuType &&
                prevOpenSubmenu.index === index
            ) {
                return null;
            }
            return { type: menuType, index };
        });
    };

    const renderMenuItems = (navItems: NavItem[], menuType: "main" | "dashboard") => (
        <ul className="flex flex-col gap-1">
            {navItems.map((nav, index) => (
                <li key={nav.id}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`menu-item group w-full ${openSubmenu?.type === menuType && openSubmenu?.index === index
                                ? "menu-item-active"
                                : "menu-item-inactive"
                                } cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${!isExpansionState ? "justify-center" : "justify-start"
                                }`}
                        >
                            <span
                                className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${openSubmenu?.type === menuType && openSubmenu?.index === index
                                    ? "menu-item-icon-active"
                                    : "menu-item-icon-inactive"
                                    }`}
                                style={nav.color ? { color: nav.color } : {}}
                            >
                                <nav.icon className="w-5 h-5" />
                            </span>
                            {isExpansionState && (
                                <>
                                    <span className="menu-item-text flex-1 text-left truncate">
                                        {nav.name}
                                    </span>
                                    <ChevronDownIcon
                                        className={`flex-shrink-0 w-4 h-4 transition-transform duration-200 ${openSubmenu?.type === menuType && openSubmenu?.index === index
                                            ? "rotate-180 text-brand-500"
                                            : ""
                                            }`}
                                    />
                                </>
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link
                                href={nav.path}
                                className={`menu-item group w-full ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                                    } flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${!isExpansionState ? "justify-center" : "justify-start"
                                    }`}
                            >
                                <span
                                    className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${isActive(nav.path)
                                        ? "menu-item-icon-active"
                                        : "menu-item-icon-inactive"
                                        }`}
                                    style={nav.color ? { color: nav.color } : {}}
                                >
                                    <nav.icon className="w-5 h-5" />
                                </span>
                                {isExpansionState && (
                                    <span className="menu-item-text flex-1 text-left truncate">
                                        {nav.name}
                                    </span>
                                )}
                            </Link>
                        )
                    )}
                    {nav.subItems && isExpansionState && (
                        <div
                            ref={(el) => {
                                subMenuRefs.current[`${menuType}-${index}`] = el;
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                height:
                                    openSubmenu?.type === menuType && openSubmenu?.index === index
                                        ? `${subMenuHeight[`${menuType}-${index}`] || 0}px`
                                        : "0px",
                            }}
                        >
                            <ul className="mt-2 space-y-1 pl-8">
                                {nav.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                        <Link
                                            href={subItem.path}
                                            className={`menu-dropdown-item w-full flex items-center justify-between p-2 rounded-md transition-all duration-200 ${isActive(subItem.path)
                                                ? "menu-dropdown-item-active"
                                                : "menu-dropdown-item-inactive"
                                                }`}
                                        >
                                            <span className="flex-1 text-left truncate">{subItem.name}</span>
                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                {subItem.new && (
                                                    <span
                                                        className={`menu-dropdown-badge text-xs px-2 py-0.5 rounded-full ${isActive(subItem.path)
                                                            ? "menu-dropdown-badge-active"
                                                            : "menu-dropdown-badge-inactive"
                                                            }`}
                                                    >
                                                        new
                                                    </span>
                                                )}
                                                {subItem.pro && (
                                                    <span
                                                        className={`menu-dropdown-badge text-xs px-2 py-0.5 rounded-full ${isActive(subItem.path)
                                                            ? "menu-dropdown-badge-active"
                                                            : "menu-dropdown-badge-inactive"
                                                            }`}
                                                    >
                                                        pro
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`fixed mt-16 flex flex-col lg:mt-0 top-0 left-0 bg-white dark:bg-[#0A0A0A] dark:text-gray-50 dark:border-[#121212] text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-teal-200 shadow-lg ${isExpanded || isMobileOpen
                ? "w-[290px]"
                : isHovered
                    ? "w-[290px]"
                    : "w-[90px]"
                } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Logo */}
            <div
                className={`py-6 px-4 flex items-center ${!isExpansionState ? "justify-center" : "justify-start"
                    }`}
            >
                <Link href="/" className="flex items-center">
                    {isExpansionState ? (
                        <Image src="/images/Logo.png" alt="ImaniPay Logo" width={90} height={90}/>
                    ) : (
                        <Image src="/images/Logo.png" alt="ImaniPay Logo" width={70} height={70}/>
                    )}
                </Link>
            </div>

            {/* Nav Sections */}
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pb-4">
                <nav className="flex-1">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2
                                className={`mb-3 text-xs uppercase font-semibold leading-5 text-gray-400 flex items-center ${!isExpansionState ? "justify-center" : "justify-start"
                                    }`}
                            >
                                {isExpansionState ? "Main Menu" : <MoreHorizontal className="w-4 h-4" />}
                            </h2>
                            {renderMenuItems(MAIN_MENU_ITEMS, "main")}
                        </div>

                        <div>
                            <h2
                                className={`mb-3 text-xs uppercase font-semibold leading-5 text-gray-400 flex items-center ${!isExpansionState ? "justify-center" : "justify-start"
                                    }`}
                            >
                                {isExpansionState ? "Dashboard" : <MoreHorizontal className="w-4 h-4" />}
                            </h2>
                            {renderMenuItems(DASHBOARD_MENU_ITEMS, "dashboard")}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;