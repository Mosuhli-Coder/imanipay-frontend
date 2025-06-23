// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { firstName, lastName, email, phone, message } = body

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
        }

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

            Message:
            ${message}
      `,
        })

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
    }
}
