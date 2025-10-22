import React from 'react';
import {
    FiBarChart2,
    FiLock,
    FiUsers,
    FiMonitor,
    FiZap,
    FiTrendingUp,
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
        <section className="section bg-gray-50 py-16" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B8C7B] mb-4">
                        Powerful Features for Your <span className="text-[#F2784B]">Payment Needs</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover how our payment platform can help streamline your business operations and enhance your customer experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#e6f4f1] mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
