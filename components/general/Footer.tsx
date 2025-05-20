"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Footer() {
    const [now, setNow] = useState(0);
    useEffect(() => {
        setNow(Date.now())
    },[])
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/images/Logo.png" alt="ImaniPay Africa" width={100} height={100} />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Making your payment experience seamless, secure, and simple.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                                "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                                "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                                "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                            ].map((d, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d={d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                {
                                    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                                    text: "123 Payment Street, Finance City, FC 12345",
                                },
                                {
                                    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                                    text: "+1 (555) 123-4567",
                                },
                                {
                                    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6",
                                    text: "info@imanipayafrica.com",
                                },
                            ].map(({ icon, text }, idx) => (
                                <li key={idx} className="flex items-start">
                                    <svg
                                        className="mr-2 mt-1 text-primary-light"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {icon.split(" ").map((d, i) => (
                                            <path key={i} d={d} />
                                        ))}
                                    </svg>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {now} ImaniPay Africa. All rights reserved.
                        </p>
                        <ul className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
