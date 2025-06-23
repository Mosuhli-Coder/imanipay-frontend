import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-orange-400">
                        How <span className="text-[#01403A]">ImaniPay</span> Works
                    </h2>
                    <p className="text-[#01403A] max-w-xl mx-auto">
                        Discover the core technologies and infrastructure that power ImaniPay. From blockchain security to seamless mobile money integration, we’re redefining how payments work across Africa and beyond.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto" defaultValue="item-1">
                    {/* Blockchain Technology */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            Blockchain Technology
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                ImaniPay leverages the Algorand blockchain—a high-performance, scalable, and energy-efficient protocol—to process and validate transactions. This ensures every payment made through our platform is cryptographically secure, transparent, and tamper-proof.
                            </p>
                            <p>
                                By using a decentralized ledger, we remove the need for third-party intermediaries, which not only reduces costs but also increases transaction speed and integrity. Algorand’s fast finality means transactions are confirmed within seconds, making it an ideal fit for real-time business payments and cross-border remittances.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Stablecoins */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            Stablecoins
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                To avoid the volatility commonly associated with cryptocurrencies, ImaniPay transacts using stablecoins such as USDC (USD Coin) and USDT (Tether). These digital assets are pegged to the US dollar, offering the predictability and stability needed for business payments and financial planning.
                            </p>
                            <p>
                                Stablecoins provide the best of both worlds: the speed and efficiency of blockchain-based assets, combined with the price stability of traditional currencies. They are easily convertible to local fiat currencies, making them highly practical for merchants, freelancers, and enterprises operating in emerging markets.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Mobile Money Integration */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            Mobile Money Integration
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                ImaniPay seamlessly integrates with widely used mobile money platforms like M-Pesa, MTN Mobile Money, and Airtel Money. This allows users across Africa to send and receive blockchain-powered payments using channels they already trust and understand.
                            </p>
                            <p>
                                By bridging the gap between decentralized finance (DeFi) and traditional mobile wallets, we make it easy for individuals and small businesses to access advanced payment infrastructure—without needing to understand how blockchain works under the hood.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Developer & Merchant APIs */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500">
                            Developer & Merchant APIs
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                ImaniPay offers a robust and developer-friendly API that enables businesses to integrate payment functionality directly into their apps, websites, or platforms. Whether you're running a SaaS platform, e-commerce store, or a mobile application, our API makes it simple to onboard users, send payouts, and collect payments.
                            </p>
                            <p>
                                The integration process is straightforward, and our documentation provides clear guidance for developers of all levels. Best of all, ImaniPay's transaction fees average below 1%—significantly lower than the traditional 5–10% fees charged by banks and international payment gateways.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
