import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { firstName, lastName, email, phone, message } = req.body

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"ImaniPay Contact" <${process.env.EMAIL_USER}>`,
            to: 'info@imanipay.com',
            subject: `New contact from ${firstName} ${lastName}`,
            text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Message: ${message}`,
        })

        return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error('Email error:', error)
        return res.status(500).json({ message: 'Failed to send email' })
    }
}
