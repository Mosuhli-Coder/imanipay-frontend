import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Hero() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#01403A]">
                            ImaniPay: Borderless Payments, Powered by Blockchain
                        </h1>
                        <p className="text-lg text-[#2B8C7B] mb-10 max-w-lg">
                            Instantly send money worldwide using stablecoins and mobile money. Enjoy lower fees, faster transactions, and enhanced security. Join the future of global payments with ImaniPay                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="btn bg-[#01403A] text-white py-2 px-4 rounded-md">
                                Get Started
                            </Link>
                            <Link href="/services" className="btn bg-white text-[#01403A] border border-[#01403A] py-2 px-4 rounded-md">
                                Learn More
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center">
                            <div className="flex">
                                {/* {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden -ml-${i > 1 ? 4 : 0}`}>
                                        <Image
                                            src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                                            alt={`User ${i}`}
                                            className="w-full h-full object-cover"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                ))} */}
                            </div>
                            <div className="ml-4">
                                <div className="flex items-center mb-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 italic">Note: This is an MVP/prototype. The journey is ongoing and we appreciate your support.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-20"></div>
                            <div className="card-shadow rounded-xl overflow-hidden relative z-10">
                                <Image
                                    src="/images/hero-img.jpg"
                                    alt="Payment Dashboard"
                                    className="w-full h-auto rounded-xl"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
