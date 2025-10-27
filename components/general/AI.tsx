import React from 'react'
import { FiCpu, FiZap, FiShield, FiTrendingUp, FiGlobe, FiClock, FiDatabase, FiArrowRight } from 'react-icons/fi'

export default function AISection() {
    return (
        <section className="py-20 md:py-28 bg-white" id="ai">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-600 mb-4">
                        <FiZap className="w-4 h-4" />
                        POWERED BY AI
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        Intelligent Payments{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            Made Simple
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our AI-powered platform transforms how businesses handle payments with predictive analytics,
                        fraud detection, and intelligent automation tailored for African markets.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FiShield className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Fraud Detection</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Real-time AI algorithms analyze transaction patterns to detect and prevent fraudulent
                                        activities before they happen, ensuring your business stays protected 24/7.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FiTrendingUp className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Advanced machine learning models forecast payment trends and customer behavior,
                                        helping you make data-driven decisions for business growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FiGlobe className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cross-Border Optimization</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Intelligent routing ensures the fastest and most cost-effective payment paths
                                        across African borders, saving you time and money on every transaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <span>Explore AI Features</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Main AI Visualization */}
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            {/* Neural Network Animation */}
                            <div className="relative h-80 bg-gradient-to-br from-teal-50 to-orange-50 rounded-2xl overflow-hidden">
                                {/* Animated Nodes */}
                                <div className="absolute inset-0">
                                    {/* Network Lines */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-teal-300 rounded-full animate-pulse"></div>
                                        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-orange-300 rounded-full animate-pulse delay-1000"></div>
                                    </div>

                                    {/* Floating Nodes */}
                                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-500 rounded-full animate-bounce"></div>
                                    <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></div>
                                    <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-700"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-emerald-500 rounded-full animate-bounce delay-500"></div>

                                    {/* Central Processing Unit */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                            <FiCpu className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-teal-600">99.7%</div>
                                    <div className="text-sm text-gray-600">Accuracy</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-orange-500">50ms</div>
                                    <div className="text-sm text-gray-600">Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-500">24/7</div>
                                    <div className="text-sm text-gray-600">Monitoring</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-teal-200">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-700">AI Active</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-orange-200">
                            <div className="text-center">
                                <div className="text-lg font-bold text-orange-500">1M+</div>
                                <div className="text-xs text-gray-600">Predictions/Day</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FiClock className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Instant payment processing with AI-powered optimization for maximum efficiency and speed.
                        </p>
                    </div>

                    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FiDatabase className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Insights</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Deep analytics and actionable insights derived from payment patterns and market trends.
                        </p>
                    </div>

                    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FiShield className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Adaptive Security</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Self-learning security systems that evolve to counter emerging threats in real-time.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Ready to Transform Your Payments with AI?
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Join thousands of businesses already leveraging our intelligent payment platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 justify-center">
                                    <span>Start Free Trial</span>
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                                <button className="group border-2 border-gray-300 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}