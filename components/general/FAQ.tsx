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
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-orange-400">
                        Frequently Asked <span className="text-[#01403A]">Questions</span>
                    </h2>
                    <p className="text-[#01403A] max-w-xl mx-auto">
                        Got questions? We&apos;ve got answers. Here&apos;s what our customers commonly ask about using ImaniPay for their payment needs.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto" defaultValue="item-1">
                    {/* How do I send money? */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            How do I send money?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Sending money with ImaniPay is simple! Just log into your dashboard, select &quot;Send Money,&quot; enter the recipient&apos;s details, choose your payment method (bank account, mobile money, or stablecoin), and confirm. Your transfer is processed instantly and arrives in seconds.
                            </p>
                            <p>
                                For mobile money transfers, we support M-Pesa, MTN Mobile Money, Airtel Money, and other popular wallets across Africa. No need to switch apps or learn new systems.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Is my money safe? */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            Is my money safe?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Absolutely. We use bank-level security with 256-bit encryption, real-time fraud detection, and blockchain technology to protect every transaction. Your funds are held in secure, regulated accounts and insured up to industry standards.
                            </p>
                            <p>
                                We never store your payment details, and all transactions are monitored 24/7 by our security team. Millions of transactions have been processed safely through our platform.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* What if I have a problem? */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            What if I have a problem?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Our friendly support team is available 24/7 via chat, email, or phone. We speak English, Swahili, French, and other local languages. Most issues are resolved within minutes, and we have a 99.9% customer satisfaction rate.
                            </p>
                            <p>
                                For urgent payment issues, contact us immediately through the app or dashboard. We&apos;re here to help you get back to business quickly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* How much do you charge? */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            How much do you charge?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Our fees are among the lowest in the industry—typically 0.5-1% per transaction, compared to 3-5% at traditional banks. No hidden fees, no monthly charges for basic accounts, and no setup costs.
                            </p>
                            <p>
                                Enterprise customers get volume discounts, and we offer free transfers for the first month when you sign up. Check our pricing page for the latest rates.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* How fast are transfers? */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            How fast are transfers?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Most transfers arrive instantly or within seconds. Mobile money payments between supported wallets are immediate. Bank transfers typically take 1-2 business days, but our blockchain-powered stablecoin transfers are always instant.
                            </p>
                            <p>
                                Cross-border payments that used to take 3-5 days now arrive in under a minute. No more waiting for weekends or bank holidays.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}