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
        icon: <FiBarChart2 className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Smart Analytics",
        description:
            "Gain valuable insights into your payment trends with our powerful analytics dashboard.",
    },
    {
        icon: <FiLock className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Secure Payments",
        description:
            "Bank-level security with encryption and fraud detection to protect your transactions.",
    },
    {
        icon: <FiUsers className="w-6 h-6 text-[#2B8C7B]" />,
        title: "User Management",
        description:
            "Create and manage user roles with customizable permissions for your team.",
    },
    {
        icon: <FiMonitor className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Multiple Devices",
        description:
            "Access your payment dashboard from any device with our responsive platform.",
    },
    {
        icon: <FiZap className="w-6 h-6 text-[#2B8C7B]" />,
        title: "API Integration",
        description:
            "Seamlessly integrate our payment solution with your existing business systems.",
    },
    {
        icon: <FiTrendingUp className="w-6 h-6 text-[#2B8C7B]" />,
        title: "Fast Payouts",
        description:
            "Get paid quickly with our efficient and streamlined payout processing system.",
    },
];

export default function Features() {
    return (
        <section className="section bg-gray-50 py-16">
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
