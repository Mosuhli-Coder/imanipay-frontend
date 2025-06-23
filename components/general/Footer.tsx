"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

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
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </a>
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
                            <li className="flex items-start">
                                <MapPin className="mr-2 mt-1 text-primary-light" size={16} />
                                <span>Masowe 1, Maseru, Lesotho</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="mr-2 mt-1 text-primary-light" size={16} />
                                <span>(+266) 57963470 / (+266) 62531166</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="mr-2 mt-1 text-primary-light" size={16} />
                                <span>info@imanipayafrica.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} ImaniPay Africa. All rights reserved.
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