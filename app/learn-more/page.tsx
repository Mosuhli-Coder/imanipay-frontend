"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LearnMorePage = () => {
  return (
    <main className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">AI Technology at ImaniPay</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How AI Powers ImaniPay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                ImaniPay leverages cutting-edge artificial intelligence to revolutionize Africa&#39;s fintech landscape,
                providing unmatched security, efficiency, and user experience across all our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Features in Action</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">🔒 AI Fraud Detection</h4>
                  <p className="text-gray-600 text-sm">
                    Real-time monitoring of all transactions using advanced machine learning algorithms
                    to detect suspicious patterns and prevent fraudulent activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">💬 Multilingual AI Chatbot</h4>
                  <p className="text-gray-600 text-sm">
                    24/7 customer support in multiple African languages including English, Swahili,
                    Zulu, Sesotho, and French for instant assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">📊 Smart Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    AI-powered dashboards providing predictive spending analysis, revenue forecasting,
                    and personalized financial insights for businesses and individuals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">💱 AI FX Optimization</h4>
                  <p className="text-gray-600 text-sm">
                    Intelligent currency fluctuation prediction and optimal settlement timing
                    to minimize exchange costs and maximize efficiency.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All AI processing is done with strict adherence to data privacy regulations.
                Your financial data is encrypted and processed securely, with AI models trained
                on anonymized data to ensure your privacy is always protected.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Future AI Developments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We&#39;re continuously expanding our AI capabilities to include advanced features like
                automated KYC verification, smart transfer recommendations, and predictive financial
                planning. Stay tuned for more AI-powered innovations coming soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </main>
  );
};

export default LearnMorePage;
