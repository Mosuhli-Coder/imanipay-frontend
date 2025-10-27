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
        <footer className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/images/Logo.png" alt="ImaniPay Africa" width={120} height={40} />
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Making your payment experience seamless, secure, and simple across Africa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link href="/about" className="hover:text-teal-600 transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-teal-600 transition-colors duration-300">Our Services</Link></li>
                            <li><Link href="/contact" className="hover:text-teal-600 transition-colors duration-300">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Careers</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link href="/faq" className="hover:text-teal-600 transition-colors duration-300">FAQs</Link></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Help Center</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <MapPin className="mr-3 mt-1 text-teal-600 flex-shrink-0" size={16} />
                                <span>Masowe 1, Maseru, Lesotho</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="mr-3 mt-1 text-teal-600 flex-shrink-0" size={16} />
                                <div>
                                    <div>(+266) 57963470</div>
                                    <div>(+266) 62531166</div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="mr-3 mt-1 text-teal-600 flex-shrink-0" size={16} />
                                <span>teboho.mosuhli97@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">
                            &copy; {currentYear} ImaniPay Africa. All rights reserved.
                        </p>
                        <ul className="flex space-x-6 mt-4 md:mt-0 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors duration-300">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}