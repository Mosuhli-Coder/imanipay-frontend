"use client";

import React from 'react'
import { FiShield, FiMessageSquare, FiZap, FiBarChart, FiGlobe, FiUser } from 'react-icons/fi'

export default function AI() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24" id="ai">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Powered by <span className="text-blue-600">AI</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ImaniPay leverages cutting-edge AI technology to revolutionize Africa&#39;s fintech landscape,
                        providing unmatched security, efficiency, and user experience.
                    </p>
                </div>

                {/* AI Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* AI Fraud Detection */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mr-4">
                                <FiShield size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">AI Fraud Detection</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Real-time detection of suspicious transactions using advanced machine learning algorithms.
                            Identifies unusual patterns, device mismatches, and potential security threats instantly.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Real-time transaction monitoring</li>
                            <li>• Behavioral pattern analysis</li>
                            <li>• Instant alerts for suspicious activity</li>
                        </ul>
                    </div>

                    {/* Multilingual AI Chatbot */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mr-4">
                                <FiMessageSquare size={32} className="text-green-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Multilingual AI Chatbot</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            24/7 customer support in multiple African languages. Provides instant help with
                            transaction status, exchange rates, and onboarding guidance.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Support in English, Swahili, Zulu, Sesotho, French</li>
                            <li>• Instant transaction status updates</li>
                            <li>• Smart onboarding assistance</li>
                        </ul>
                    </div>

                    {/* AI KYC/Onboarding */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mr-4">
                                <FiUser size={32} className="text-purple-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">AI KYC/Onboarding</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Automated ID verification, forgery detection, and selfie checks for faster, more secure onboarding.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Automated document verification</li>
                            <li>• Facial recognition technology</li>
                            <li>• Reduced onboarding time</li>
                        </ul>
                    </div>

                    {/* Smart Analytics */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mr-4">
                                <FiBarChart size={32} className="text-orange-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Smart Analytics</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            AI-powered dashboards for businesses and individuals with spending patterns, revenue forecasts, and personalized insights.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Predictive spending analysis</li>
                            <li>• Revenue forecasting</li>
                            <li>• Personalized financial insights</li>
                        </ul>
                    </div>

                    {/* AI FX Optimization */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mr-4">
                                <FiGlobe size={32} className="text-blue-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">AI FX Optimization</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Predicts currency fluctuations and optimizes stablecoin ↔ fiat settlements at the best times.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Currency fluctuation prediction</li>
                            <li>• Optimal settlement timing</li>
                            <li>• Reduced exchange costs</li>
                        </ul>
                    </div>

                    {/* Smart Transfer Recommendations */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mr-4">
                                <FiZap size={32} className="text-teal-600" />
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-900">Smart Transfer Recommendations</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Suggests cheapest, fastest transfer methods (mobile money, stablecoin, bank) based on real-time data.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Cost optimization</li>
                            <li>• Speed analysis</li>
                            <li>• Real-time method comparison</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience AI-Powered Finance?</h3>
                        <p className="text-gray-600 mb-6">
                            Join ImaniPay and be part of Africa&#39;s AI-driven financial revolution.
                            Starting with fraud detection and multilingual support, evolving into a comprehensive AI financial platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.location.href = '/register'}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg transform hover:scale-105"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => window.location.href = '/learn-more'}
                                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg transform hover:scale-105"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
