import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { name, email, phone, message, service, location } = data

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting CarpetCozy',
      html: `
        <h2>Thank you for contacting CarpetCozy!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Here's a summary of your message:</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>The CarpetCozy Team</p>
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}

export { handler } 