import Image from 'next/image'
import React from 'react'
import { FiPlus, FiLock, FiUser } from 'react-icons/fi'
import { FAQ } from "@/components/general/FAQ";

export default function About() {
    return (
        <div className="bg-gray-50" id="about">
            <section className="py-16 md:py-24 bg-teal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            ImaniPay <span className="text-orange-400">Africa</span>
                        </h1>
                        <p className="text-lg text-white mb-8">
                            Revolutionizing payment solutions since 2025. Learn more about our journey and the team behind our success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">Our <span className="text-[#01403A]-800">Story</span></h2>
                            <p className="text-gray-700 mb-6">
                                ImaniPay Africa was founded in 2025 with a simple mission: to make digital payments accessible, safe, and seamless for businesses of all sizes.
                            </p>
                            <p className="text-gray-700 mb-6">
                                What started as a small team with big ideas has grown into a global company serving thousands of businesses across industries.
                            </p>
                            <p className="text-gray-700">
                                Today, we&apos;re proud to be at the forefront of payment technology, constantly evolving our solutions to meet the changing needs of businesses and consumers alike.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-300 rounded-full opacity-20"></div>
                                <Image
                                    src="/images/about-img.jpg"
                                    alt="Our office"
                                    className="w-full h-[350px] rounded-xl shadow-xl object-cover"
                                    width={800}
                                    height={350}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-teal-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-orange-400">Our <span className="text-[#01403A]">Values</span></h2>
                        <p className="text-[#01403A] max-w-xl mx-auto">These core principles guide everything we do at ImaniPay, from product development to customer service.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovation */}
                        <div className="bg-teal-100 rounded-xl p-8 shadow-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                                <FiPlus size={32} className="text-[#01403A]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-600">We constantly push boundaries to create cutting-edge payment solutions that keep our clients ahead of the curve.</p>
                        </div>

                        {/* Security */}
                        <div className="bg-teal-100 rounded-xl p-8 shadow-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                                <FiLock size={32} className="text-[#01403A]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
                            <p className="text-gray-600">We prioritize the protection of our clients&apos; data and transactions with industry-leading security measures.</p>
                        </div>

                        {/* Customer Focus */}
                        <div className="bg-teal-100 rounded-xl p-8 shadow-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                                <FiUser size={32} className="text-[#01403A]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                            <p className="text-gray-600">We build solutions with our customers&apos; needs at the forefront, ensuring an exceptional experience at every step.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='faq'>
                <FAQ />
            </section>

        </div>

    )
}
