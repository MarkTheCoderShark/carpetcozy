import { HandlerEvent, HandlerContext } from '@netlify/functions'
import * as nodemailer from 'nodemailer'

interface FormData {
  'first-name': string
  'last-name': string
  email: string
  phone: string
  service: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const formData = JSON.parse(event.body || '{}') as FormData

    // Validate required fields
    const requiredFields = ['first-name', 'last-name', 'email', 'phone', 'service', 'message']
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData])

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields',
          fields: missingFields,
        }),
      }
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData['first-name']} ${formData['last-name']}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    }
  } catch (error) {
    console.error('Error processing form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
} 