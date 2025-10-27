"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>

      {/* Floating Stablecoins */}
      <div className="absolute top-1/4 left-10 animate-float-slow">
        <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#2775CA] to-[#0052FF] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-gray-900 font-semibold text-xs">USDC</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-20 animate-float-medium">
        <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#0EBF8E] to-[#00A76F] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-gray-900 font-semibold text-xs">USDT</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 animate-float-fast">
        <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#F0B90B] to-[#FFD700] rounded-full flex items-center justify-center">
              <span className="text-gray-900 text-xs font-bold">B</span>
            </div>
            <span className="text-gray-900 font-semibold text-xs">BUSD</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 animate-float-slow delay-1000">
        <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#00D1FF] to-[#0085FF] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-gray-900 font-semibold text-xs">DAI</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/3 animate-float-medium delay-500">
        <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF4757] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-gray-900 font-semibold text-xs">TUSD</span>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-50/20 to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Send Money Anywhere, <span className="text-[#00E7B3]">Instantly</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-lg">
              No confusing steps. No hidden fees. Just peace of mind.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-lg">
              Join thousands of businesses already saving time and money with lower fees, faster transactions, and bank-level security.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/register"
                className="btn bg-[#00E7B3] hover:bg-[#00cfa1] text-[#001F1B] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
              >
                <span className="relative z-10 tracking-wide text-sm">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
              </Link>

              <Link
                href="/learn-more"
                className="btn bg-transparent border border-[#00E7B3] text-[#00E7B3] hover:bg-[#00E7B3]/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Enhanced Right image */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/images/hero-img.jpg"
                alt="Send money instantly with ImaniPay"
                className="w-full h-auto rounded-2xl"
                width={1000}
                height={1000}
                priority
              />
            </div>

            {/* Floating stablecoin near image */}
            <div className="absolute -top-6 -right-6 animate-bounce delay-700">
              <div className="bg-white backdrop-blur-md border border-gray-200 rounded-xl p-2 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#8247E5] to-[#6B32D6] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <span className="text-gray-900 font-bold text-sm">EURC</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
              <div className="bg-white backdrop-blur-md border border-gray-200 rounded-xl p-2 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="text-gray-900 font-semibold text-xs">PYUSD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
          66% { transform: translateY(12px) rotate(-5deg) scale(0.95); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
          25% { transform: translateX(15px) translateY(-12px) scale(1.05); }
          50% { transform: translateX(-8px) translateY(15px) scale(0.95); }
          75% { transform: translateX(-12px) translateY(-8px) scale(1.1); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          20% { transform: translate(12px, -15px) scale(1.1) rotate(5deg); }
          40% { transform: translate(-8px, 12px) scale(0.9) rotate(-5deg); }
          60% { transform: translate(-15px, -12px) scale(1.05) rotate(3deg); }
          80% { transform: translate(8px, 15px) scale(0.95) rotate(-3deg); }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 10s ease-in-out infinite; }
      `}</style>
    </section>
  )
}