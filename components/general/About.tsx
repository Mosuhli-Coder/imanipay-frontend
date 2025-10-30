import React from 'react'
import { FiArrowRight, FiGlobe, FiShield, FiUsers } from 'react-icons/fi'
import { FAQ } from "@/components/general/FAQ";

export default function About() {
    return (
        <div className="bg-white" id="about">
            {/* Enhanced Hero Section */}
            <section className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-gray-200">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            <span className="text-teal-700 text-sm font-medium">Since 2025</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                            Building the Future of{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                African Payments
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Pioneering borderless payment infrastructure that empowers businesses across Africa to thrive in the global digital economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story - Enhanced */}
            <section className="section bg-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">Our <span className="text-[#01403A]-800">Story</span></h2>
                            <p className="text-gray-700 mb-6">
                                ImaniPay Africa was founded in 2025 with a bold mission &mdash; to redefine how digital payments work across Africa. We believe every business, no matter its size, deserves access to fast, secure, and affordable payment solutions.
                            </p>
                            <p className="text-gray-700 mb-6">
                                What began as a small team driven by innovation is now building technology that empowers businesses to move money seamlessly and confidently.
                            </p>
                            <p className="text-gray-700">
                                We&apos;re not just following global trends &mdash; we&apos;re shaping the future of payments in Africa, one transaction at a time.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <span className="inline-block text-orange-500 font-semibold mb-3">OUR JOURNEY</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                                    Redefining{' '}
                                    <span className="text-teal-600">African</span>{' '}
                                    Financial Infrastructure
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    ImaniPay Africa was born from a vision to bridge the digital payment gap across the continent.
                                    We recognized the immense potential of African businesses and set out to build the financial
                                    infrastructure they deserve.
                                </p>
                                <p>
                                    Starting with a small but passionate team, we&apos;ve grown into a trusted partner for thousands
                                    of businesses, enabling seamless cross-border transactions and driving economic growth
                                    through innovative payment solutions.
                                </p>
                                <p>
                                    Today, we&apos;re at the forefront of Africa&apos;s digital transformation, constantly evolving to
                                    meet the unique challenges and opportunities of the continent&apos;s dynamic markets.
                                </p>
                            </div>

                            <button className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <span>Read Our Full Story</span>
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Values Section */}
            <section className="py-20 md:py-28 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-orange-500 font-semibold mb-3">OUR PRINCIPLES</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Values That Drive{' '}
                            <span className="text-teal-600">Innovation</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            These core principles are the foundation of everything we build, ensuring we deliver exceptional value while maintaining the highest standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Innovation Card */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <FiGlobe className="text-white text-2xl" />
                                </div>
                            </div>
                            <div className="pt-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Innovation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We pioneer cutting-edge payment solutions that position African businesses at the forefront of global commerce and digital transformation.
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></span>
                            </div>
                        </div>

                        {/* Security Card */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <FiShield className="text-white text-2xl" />
                                </div>
                            </div>
                            <div className="pt-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust & Security</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Enterprise-grade security measures and compliance frameworks ensure your transactions and data are protected with the highest standards.
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
                            </div>
                        </div>

                        {/* Customer Focus Card */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <FiUsers className="text-white text-2xl" />
                                </div>
                            </div>
                            <div className="pt-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Success</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We partner with you for success, building solutions that solve real challenges and drive meaningful growth for your business.
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">50K+</div>
                            <div className="text-gray-600">Businesses Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">25+</div>
                            <div className="text-gray-600">African Countries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">$2B+</div>
                            <div className="text-gray-600">Processed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* FAQ Section */}
            <section id='faq' className="py-20 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-block text-orange-500 font-semibold mb-3">SUPPORT</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Frequently Asked{' '}
                            <span className="text-teal-600">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about ImaniPay Africa. Can&apos;t find the answer you&apos;re looking for?
                            Please chat to our friendly team.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>
        </div>
    )
}