import React from 'react';
import {
    FiBarChart2,
    FiLock,
    FiUsers,
    FiMonitor,
    FiZap,
    FiTrendingUp,
    FiArrowRight,
    FiShield,
    FiCode,
    FiSmartphone,
} from 'react-icons/fi';

const features = [
    {
        icon: <FiZap className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Lower Fees",
        description:
            "Save money on every transaction with our competitive rates—significantly lower than traditional banks and payment processors.",
    },
    {
        icon: <FiTrendingUp className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Instant Transfers",
        description:
            "Send and receive money in seconds, not days. No more waiting for bank transfers or wire delays.",
    },
    {
        icon: <FiLock className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Bank-Level Security",
        description:
            "Your money is protected with enterprise-grade encryption and fraud detection. Sleep soundly knowing your funds are safe.",
    },
    {
        icon: <FiMonitor className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Easy Mobile Money",
        description:
            "Connect your favorite mobile money wallets like M-Pesa, MTN, and Airtel. Pay and get paid using what you already use.",
    },
    {
        icon: <FiBarChart2 className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Simple Dashboard",
        description:
            "Track all your payments in one place. See what's coming in, what's going out, and get insights to grow your business.",
    },
    {
        icon: <FiUsers className="w-6 h-6 text-[#2B8C7B]" />,
        title: "24/7 Support",
        description:
            "Questions? Our friendly support team is here to help in English, Swahili, and other local languages whenever you need us.",
    },
];

export default function Features() {
    return (
        <section className="py-20 md:py-28 bg-white" id="services">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-600 mb-6">
                        <FiZap className="w-4 h-4" />
                        POWERFUL FEATURES
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        Everything You Need to{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            Scale
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Advanced payment infrastructure designed to grow with your business,
                        featuring enterprise-grade security and intelligent automation.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Background Gradient Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10`}></div>

                            {/* Icon Container */}
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                                {/* Icon Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-teal-600 transition-colors duration-300">
                                <span>Learn more</span>
                                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${feature.borderColor} rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-5`}></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 border border-teal-100">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Ready to Transform Your Payment Experience?
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join thousands of businesses using our platform to streamline payments,
                            reduce costs, and drive growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 justify-center">
                                <span>Get Started Free</span>
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-gray-300 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                View All Features
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">99.9%</div>
                        <div className="text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50ms</div>
                        <div className="text-gray-600">Avg. Response</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">256-bit</div>
                        <div className="text-gray-600">Encryption</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
                        <div className="text-gray-600">Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}