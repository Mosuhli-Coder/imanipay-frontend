"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-xl backdrop-saturate-150 border-b border-white/40'
                : 'bg-gradient-to-r from-teal-700 to-emerald-700 border-b border-teal-600/30'
            }`}>
            <div className="container mx-auto py-3 px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/Logo.png"
                        alt="ImaniPay Logo"
                        width={100}
                        height={100}
                        className={`filter transition-all duration-500 ${isScrolled ? 'drop-shadow-sm' : 'brightness-0 invert drop-shadow-lg'
                            }`}
                    />
                </Link>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-lg transition-all duration-500 ${isScrolled
                                ? 'bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70'
                                : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                            } shadow-sm`}
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

                <nav className={`absolute top-full left-0 w-full transition-all duration-500 ${isScrolled
                        ? 'backdrop-blur-xl backdrop-saturate-150 border-b border-white/30'
                        : 'backdrop-blur-xl backdrop-saturate-150 border-b border-teal-600/30'
                    } lg:backdrop-blur-none lg:bg-transparent lg:border-none shadow-2xl lg:shadow-none lg:static lg:w-auto lg:flex transform transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden lg:block'}`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center">
                        <li>
                            <Link
                                href="/"
                                className={`block py-4 px-6 font-medium transition-all duration-500 lg:py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className={`block py-4 px-6 font-medium transition-all duration-500 lg:py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#services"
                                className={`block py-4 px-6 font-medium transition-all duration-500 lg:py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#faq"
                                className={`block py-4 px-6 font-medium transition-all duration-500 lg:py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className={`block py-4 px-6 font-medium transition-all duration-500 lg:py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className={`lg:hidden border-t transition-all duration-500 ${isScrolled ? 'border-white/30' : 'border-teal-600/30'
                            } mt-2`}>
                            <Link
                                href="/login"
                                className={`block py-4 px-6 font-medium transition-all duration-500 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                        </li>
                        <li className="lg:hidden">
                            <Link
                                href="/register"
                                className={`block py-4 px-6 font-medium transition-all duration-500 ${isScrolled
                                        ? 'text-gray-700 hover:text-teal-600'
                                        : 'text-white hover:text-teal-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/login"
                        className={`transition-all duration-500 py-2 px-6 rounded-xl font-medium shadow-sm hover:shadow-md ${isScrolled
                                ? 'bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 hover:bg-white/80 hover:border-white/60'
                                : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/40'
                            }`}
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className={`transition-all duration-500 py-2 px-6 rounded-xl font-medium shadow-sm hover:shadow-md ${isScrolled
                                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 border border-white/20'
                                : 'bg-white text-teal-700 hover:bg-teal-50 border border-white/20'
                            }`}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;