import React from 'react'
import { FiShield, FiZap, FiGlobe, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi'

export default function WhyUs() {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-600 mb-6">
            <FiAward className="w-4 h-4" />
            WHY CHOOSE IMANIPAY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Built for Africa&apos;s{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We understand the unique challenges and opportunities of African markets.
            Our platform is specifically designed to meet the needs of businesses and individuals across the continent.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiShield className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bank-Grade Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-layer security with blockchain technology, encryption, and real-time fraud monitoring
                  to protect every transaction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiZap className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast Transactions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Process payments in seconds, not days. Our blockchain infrastructure ensures near-instant
                  settlement across borders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiGlobe className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">True Cross-Border Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamlessly send and receive money across 25+ African countries with local currency support
                  and stablecoin options.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost-Effective Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Save up to 70% on transaction fees compared to traditional banking and money transfer services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiUsers className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">User-First Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive interface designed for both tech-savvy users and those new to digital payments,
                  with 24/7 multilingual support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FiAward className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trusted by 50,000+ businesses and processing over $2B in transactions with 99.9% uptime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 border border-teal-200 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Businesses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">$2B+</div>
              <div className="text-gray-600 font-medium">Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of businesses transforming their payment processes with ImaniPay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}