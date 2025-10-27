"use client"
import React, { useState } from 'react'
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "How does ImaniPay ensure the security of transactions?",
        answer: "We use bank-level encryption, multi-factor authentication, and real-time fraud monitoring. All transactions are protected with SSL encryption and comply with PCI DSS standards to ensure your funds and data are always secure."
    },
    {
        question: "What countries do you currently operate in?",
        answer: "We currently serve 25+ African countries including Nigeria, Kenya, Ghana, South Africa, Egypt, and Rwanda. We're continuously expanding to bring seamless payments to more regions across the continent."
    },
    {
        question: "How long do international transfers take?",
        answer: "Most international transfers are completed within 2-4 hours. Some regions may experience slightly longer processing times depending on local banking regulations and partner networks."
    },
    {
        question: "What are your transaction fees?",
        answer: "We offer competitive pricing with local transfers starting at 0.5% and international transfers at 1.5%. Volume discounts and custom enterprise pricing are available for businesses processing large amounts."
    },
    {
        question: "Can I integrate ImaniPay with my existing platform?",
        answer: "Yes! We provide comprehensive APIs, SDKs, and plugins for popular e-commerce platforms. Our developer documentation makes integration straightforward, and our support team is available to assist with implementation."
    },
    {
        question: "Do you support mobile money payments?",
        answer: "Absolutely. We support all major mobile money providers across Africa including M-Pesa, MTN Mobile Money, Airtel Money, and Orange Money, enabling seamless payments for both urban and rural customers."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl border border-gray-200 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-500/20 rounded-2xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-teal-50 group-hover:text-teal-600'
                                    }`}>
                                    {openIndex === index ? (
                                        <FiMinus className="w-4 h-4" />
                                    ) : (
                                        <FiPlus className="w-4 h-4" />
                                    )}
                                </div>
                                <span className={`text-lg font-semibold pr-4 transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-teal-700'
                                    }`}>
                                    {item.question}
                                </span>
                            </div>

                            <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-90 text-teal-600' : 'text-gray-400 group-hover:text-teal-500'
                                }`}>
                                <FiArrowRight className="w-4 h-4" />
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="px-6 pb-6 ml-12">
                                <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-4"></div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Support CTA */}
            <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                        Our support team is here to help you get the answers you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
                            <span>Contact Support</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="group border-2 border-gray-300 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}