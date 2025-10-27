'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck, FiArrowRight, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreed: false,
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target
        const { name, type, value } = target

        const newValue =
            type === 'checkbox'
                ? (target as HTMLInputElement).checked
                : value

        setForm(prev => ({
            ...prev,
            [name]: newValue,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (res.ok) {
                toast.success('🎉 Message sent successfully! We\'ll get back to you within 24 hours.')
                setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    agreed: false,
                })
            } else {
                toast.error(data.message || 'Failed to send message')
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
            console.error('Email error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-600 mb-6">
                        <FiMessageSquare className="w-4 h-4" />
                        GET IN TOUCH
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        Let's Start a{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            Conversation
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have questions about our payment solutions? We're here to help and would love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <FiMapPin className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                                        <p className="text-gray-600">Masowe 1, Maseru, Lesotho</p>
                                        <p className="text-sm text-gray-500">Serving businesses across Africa</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <FiPhone className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Call us</h4>
                                        <p className="text-gray-600">(+266) 57963470</p>
                                        <p className="text-gray-600">(+266) 62531166</p>
                                        <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <FiMail className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email us</h4>
                                        <p className="text-gray-600">teboho.mosuhli97@gmail.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200">
                                <div className="text-2xl font-bold text-teal-600 mb-1">24h</div>
                                <div className="text-sm text-gray-600">Avg. Response</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200">
                                <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gray-50/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gray-50/50"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                <div className="relative">
                                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+266 123 456 78"
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your project or inquiry..."
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gray-50/50 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex items-center h-5">
                                    <input
                                        name="agreed"
                                        type="checkbox"
                                        checked={form.agreed}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                    />
                                </div>
                                <label className="text-sm text-gray-600">
                                    I agree to the{' '}
                                    <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                                        privacy policy
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                                        terms of service
                                    </a>.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={!form.agreed || isLoading}
                                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed group"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Sending Message...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <FiSend className="w-5 h-5" />
                                        <span>Send Message</span>
                                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}