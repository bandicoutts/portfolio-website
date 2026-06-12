'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function submitContact(data: ContactPayload): Promise<{ success: boolean; error?: string }> {
  const { name, email, message } = data

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: 'Add your name, email and a short message.' }
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { success: false, error: 'Enter a valid email address so I can reply.' }
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <contact@flynncoutts.com>',
    to: 'd.coutts@gmail.com',
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

  if (error) {
    return { success: false, error: 'The form did not send. Email me directly at d.coutts@gmail.com.' }
  }

  return { success: true }
}
