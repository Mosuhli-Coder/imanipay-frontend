'use client'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreed: false,
    })

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

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (res.ok) {
                toast.success('Email sent successfully')
                setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    agreed: false,
                })
            } else {
                toast.error(data.message || 'Failed to send email')
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
            console.error('Email error:', error)
        }
    }

    return (
        <div className="bg-white py-16 px-6 md:py-24 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
                    Contact <span className="text-orange-400">Us</span>
                </h2>
                <p className="text-lg text-gray-600">
                    Have a question or want to get in touch? Fill out the form and we&apos;ll get back to you soon.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-teal-600 focus:border-teal-600"
                    />
                    <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-teal-600 focus:border-teal-600"
                    />
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="col-span-2 rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-teal-600 focus:border-teal-600"
                    />
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="col-span-2 rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-teal-600 focus:border-teal-600"
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Your message"
                        required
                        className="col-span-2 rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-teal-600 focus:border-teal-600"
                    />
                    <div className="col-span-2 flex items-start gap-2">
                        <input
                            name="agreed"
                            type="checkbox"
                            checked={form.agreed}
                            onChange={handleChange}
                            className="mt-1 h-5 w-5 text-teal-600 border-gray-300 rounded"
                        />
                        <label className="text-sm text-gray-600">
                            I agree to the{' '}
                            <a href="#" className="text-teal-600 underline">
                                privacy policy
                            </a>.
                        </label>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-teal-800 px-6 py-3 text-white font-semibold hover:bg-teal-700"
                        disabled={!form.agreed}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
