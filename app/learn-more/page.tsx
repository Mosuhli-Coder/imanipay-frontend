"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiDollarSign, FiZap, FiShield, FiSmartphone, FiClock, FiHeadphones } from 'react-icons/fi';

const LearnMorePage = () => {
  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-12 px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How ImaniPay <span className="text-[#2B8C7B]">Saves You Money</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Send money anywhere in Africa—faster, cheaper, and safer than traditional banks. 
            Here&apos;s exactly how much you&apos;ll save.
          </p>
        </div>

        {/* Pricing Comparison */}
        <Card className="mb-8 bg-gradient-to-br from-[#2B8C7B]/5 to-[#F2784B]/5">
          <CardHeader>
            <CardTitle className="text-2xl">💰 Lower Fees That Add Up</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 text-red-800">Traditional Banks</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3-5% per transaction</li>
                  <li>• Hidden exchange rate markups</li>
                  <li>• Monthly account fees</li>
                  <li>• Setup and wire transfer costs</li>
                </ul>
                <p className="mt-4 font-semibold text-red-800">
                  Sending $1,000? You pay <span className="text-xl">$30-$50</span> in fees
                </p>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 text-green-800">ImaniPay</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 0.5-1% per transaction</li>
                  <li>• Transparent exchange rates</li>
                  <li>• No monthly fees (basic accounts)</li>
                  <li>• Zero setup costs</li>
                </ul>
                <p className="mt-4 font-semibold text-green-800">
                  Sending $1,000? You pay <span className="text-xl">$5-$10</span> in fees
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-[#2B8C7B]">
              <p className="text-lg font-semibold text-[#2B8C7B] text-center">
                💡 That&apos;s up to <span className="text-2xl">80% savings</span> on every transaction!
              </p>
              <p className="text-gray-600 text-center mt-2">
                First month free for new sign-ups. Volume discounts available for businesses.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">📲 How to Send Money in 3 Simple Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2B8C7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-lg mb-2">Sign Up & Verify</h4>
                <p className="text-gray-600">
                  Create your account in minutes. Quick ID verification to keep everyone safe.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2B8C7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-lg mb-2">Enter Details</h4>
                <p className="text-gray-600">
                  Add recipient&apos;s mobile money number or bank details. Choose how much to send.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2B8C7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-lg mb-2">Send & Track</h4>
                <p className="text-gray-600">
                  Confirm and send. Money arrives in seconds. Track every transaction in your dashboard.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FiZap className="w-8 h-8 text-[#F2784B]" />
                <CardTitle>Lightning Fast</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Most transfers arrive <strong>instantly or within seconds</strong>. Mobile money payments 
                between supported wallets are immediate.
              </p>
              <p className="text-gray-600">
                Cross-border payments that used to take 3-5 days now arrive in under a minute. 
                No more waiting for weekends or bank holidays.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FiShield className="w-8 h-8 text-[#2B8C7B]" />
                <CardTitle>Bank-Level Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Your money is protected with 256-bit encryption, the same security banks use. 
                We monitor every transaction 24/7 for suspicious activity.
              </p>
              <p className="text-gray-600">
                We never store your payment details, and your funds are held in secure, 
                regulated accounts insured up to industry standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FiSmartphone className="w-8 h-8 text-[#F2784B]" />
                <CardTitle>Mobile Money Integration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Connect your favorite mobile money wallets: <strong>M-Pesa, MTN Mobile Money, 
                Airtel Money</strong>, and more.
              </p>
              <p className="text-gray-600">
                No need to learn new systems. Use what you already know and trust.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FiHeadphones className="w-8 h-8 text-[#2B8C7B]" />
                <CardTitle>24/7 Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our friendly support team is available round the clock via chat, email, or phone. 
                We speak <strong>English, Swahili, French</strong>, and other local languages.
              </p>
              <p className="text-gray-600">
                Most issues resolved within minutes. 99.9% customer satisfaction rate.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Real User Story */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl">💬 Real Customer Story</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-[#2B8C7B] pl-6 py-4">
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;I used to spend $45 in fees every time I paid my supplier in Ghana. With ImaniPay, 
                I pay $8. The money arrives in seconds instead of days. It&apos;s completely changed how 
                I run my business.&quot;
              </p>
              <footer className="text-gray-600 font-semibold">
                — Maria, Small Business Owner, Kenya
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* Security Note */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">🔒 How We Keep Your Money Safe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              We use secure technology behind the scenes to protect every transaction. 
              You don&apos;t need to worry about the technical details—we handle the complexity 
              so you can focus on your business.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-gray-700">
                ✓ Real-time fraud detection<br/>
                ✓ Encrypted transactions<br/>
                ✓ Regulated and insured accounts<br/>
                ✓ 24/7 security monitoring
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#2B8C7B] to-[#01403A] rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Saving Money?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses already saving time and money with ImaniPay. 
            First month free for new customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/register'}
              className="bg-white text-[#2B8C7B] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Get Started Now
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Talk to Our Team
            </button>
          </div>
        </div>

        {/* Optional: For investors/technical users */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Interested in the technology behind ImaniPay?{' '}
            <a href="/technology" className="text-[#2B8C7B] hover:underline font-semibold">
              Learn about our blockchain and AI infrastructure
            </a>
          </p>
        </div>
      </main>
    </main>
  );
};

export default LearnMorePage;