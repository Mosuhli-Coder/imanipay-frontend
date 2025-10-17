import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E1A1A] via-[#001F1B] to-[#012C26] text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              ImaniPay: Borderless Payments, Powered by <span className="text-[#00E7B3]">Blockchain</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg">
              Instantly send money worldwide using stablecoins and mobile money. Enjoy lower fees, faster transactions, and enhanced security. Join the future of global payments with ImaniPay.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn bg-[#00E7B3] hover:bg-[#00cfa1] text-[#001F1B] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="btn bg-transparent border border-[#00E7B3] text-[#00E7B3] hover:bg-[#00E7B3]/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Rating / Note section */}
            <div className="mt-12 flex items-start">
              <div className="ml-1">
                <div className="flex items-center mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400 italic">
                  Note: This is an MVP prototype. The journey is ongoing and we appreciate your support.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#00E7B3]/10 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00E7B3]/10 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/hero-img.jpg"
                alt="Payment Dashboard"
                className="w-full h-auto rounded-2xl"
                width={1000}
                height={1000}
                priority
                sizes="100vw"
                style={{
                  aspectRatio: '1000/1000',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
