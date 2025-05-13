"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto py px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/images/Logo.png" alt="ImaniPay Logo" width={100} height={100} />
                </Link>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>

                <nav className={`absolute top-full left-0 w-full bg-white shadow-md lg:shadow-none lg:static lg:w-auto lg:flex transform transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden lg:block'}`}>
                    <ul className="flex flex-col lg:flex-row">
                        <li>
                            <Link href="/" className="block py-3 px-6 text-gray-700 hover:text-primary-blue font-medium">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-3 px-6 text-gray-700 hover:text-primary-blue font-medium">About</Link>
                        </li>
                        <li>
                            <Link href="/services" className="block py-3 px-6 text-gray-700 hover:text-primary-blue font-medium">Services</Link>
                        </li>
                        <li>
                            <Link href="/faq" className="block py-3 px-6 text-gray-700 hover:text-primary-blue font-medium">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-3 px-6 text-gray-700 hover:text-primary-blue font-medium lg:hidden">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden lg:block">
                    <Link href="/contact" className="btn bg-[#01403A] text-white py-2 px-4 rounded-md">Contact Us</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
