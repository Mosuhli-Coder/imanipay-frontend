"use client"
import React, { useState, createContext, useContext, ReactNode } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'





/**
 * Lightweight local Accordion implementation to satisfy the component usage in this file.
 * Supports single-type accordion with optional collapsible behavior.
 */

type AccordionType = 'single' | 'multiple'

interface AccordionContextValue {
    open?: string
    setOpen: (val?: string) => void
    collapsible?: boolean
    type?: AccordionType
}

const AccordionContext = createContext<AccordionContextValue>({
    open: undefined,
    setOpen: () => {},
    collapsible: false,
    type: 'single',
})

const ItemContext = createContext<{ value?: string }>({ value: undefined })

interface AccordionProps {
    children: ReactNode
    type?: AccordionType
    collapsible?: boolean
    className?: string
    defaultValue?: string
}

export const Accordion: React.FC<AccordionProps> = ({ children, type = 'single', collapsible = false, defaultValue }) => {
    const [open, setOpenState] = useState<string | undefined>(defaultValue)
    const setOpen = (val?: string) => {
        if (type === 'single') {
            if (open === val) {
                if (collapsible) setOpenState(undefined)
            } else {
                setOpenState(val)
            }
        } else {
            // For simplicity, in a multiple mode we'll just set the last opened item
            setOpenState(val)
        }
    }

    return (
        <AccordionContext.Provider value={{ open, setOpen, collapsible, type }}>
            {children}
        </AccordionContext.Provider>
    )
}

interface AccordionItemProps {
    children: ReactNode
    value: string
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, value }) => {
    return (
        <ItemContext.Provider value={{ value }}>
            <div className="border-b last:border-b-0 py-4" data-value={value}>
                {children}
            </div>
        </ItemContext.Provider>
    )
}

type TriggerProps = {
    children?: ReactNode
    className?: string
    value?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const AccordionTrigger: React.FC<TriggerProps> = ({ children, className, value, ...props }) => {
    const { open, setOpen } = useContext(AccordionContext)
    const isOpen = open === value
    return (
        <button
            {...props}
            onClick={(e) => {
                e.preventDefault()
                setOpen(isOpen ? undefined : value)
            }}
            className={`flex items-center justify-between w-full ${className ?? ''}`}
        >
            <span>{children}</span>
            <span className="ml-4">{isOpen ? <FiMinus /> : <FiPlus />}</span>
        </button>
    )
}

interface AccordionContentProps {
    children?: ReactNode
    className?: string
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className }) => {
    const { open } = useContext(AccordionContext)
    const { value } = useContext(ItemContext)
    const isOpen = open === value

    return (
        <div className={`${className ?? ''}`} style={{ display: isOpen ? undefined : 'none' }}>
            {children}
        </div>
    )
}

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
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500" value="item-1">
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
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500" value="item-2">
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
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500" value="item-3">
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
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500" value="item-4">
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
                        <AccordionTrigger className="text-lg font-medium text-[#01403A] hover:text-orange-500" value="item-5">
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
        </section>
    )
}