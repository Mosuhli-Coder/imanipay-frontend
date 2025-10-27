import React from 'react'
import { FiShield, FiMessageSquare, FiZap } from 'react-icons/fi'

export default function AISection() {
    return (
        <section className="py-20 md:py-28 bg-white" id="ai">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Your Money is <span className="text-blue-600">Safe and Fast</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We use smart technology behind the scenes to keep your money safe and your transfers instant.
                        You don&apos;t need to worry about the details—we handle the complexity so you can focus on your business.
                    </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Security */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mr-4">
                                <FiShield size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Protected 24/7</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Every transaction is monitored in real-time to catch suspicious activity before it becomes a problem. 
                            Your money is always protected.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>✓ Instant fraud alerts</li>
                            <li>✓ Bank-level encryption</li>
                            <li>✓ Continuous monitoring</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mr-4">
                                <FiMessageSquare size={32} className="text-green-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Help in Your Language</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Get instant help 24/7 in the language you&apos;re most comfortable with. 
                            Our support team is always ready to assist you.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>✓ English, Swahili, Zulu, Sesotho, French</li>
                            <li>✓ Instant answers to your questions</li>
                            <li>✓ Available round the clock</li>
                        </ul>
                    </div>

                    {/* Speed */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mr-4">
                                <FiZap size={32} className="text-teal-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Smart & Fast</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We automatically find the fastest and cheapest way to send your money, 
                            so you always get the best deal.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>✓ Instant transfer recommendations</li>
                            <li>✓ Lowest fees automatically selected</li>
                            <li>✓ Real-time exchange rates</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Send Money the Smart Way?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of businesses already saving time and money with ImaniPay. 
                            Our technology works behind the scenes to keep things simple for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.location.href = '/register'}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg transform hover:scale-105"
                            >
                                Get Started Now
                            </button>
                            <button
                                onClick={() => window.location.href = '/learn-more'}
                                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg transform hover:scale-105"
                            >
                                See How It Works
                            </button>
                        </div>
                        
                        {/* Optional tech link */}
                        <p className="text-gray-500 text-sm mt-6">
                            Interested in our technology?{' '}
                            <a href="/technology" className="text-blue-600 hover:underline">
                                Learn about our AI and blockchain infrastructure
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}