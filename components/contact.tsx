'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/contact'

const EMAIL_RE = /\S+@\S+\.\S+/

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitError(null)
    setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  const blur = (key: keyof typeof touched) => () =>
    setTouched(prev => ({ ...prev, [key]: true }))

  const errors = {
    name: touched.name && !form.name.trim() ? 'Add your name' : null,
    email: touched.email && !EMAIL_RE.test(form.email) ? 'Enter a valid email address' : null,
    message: touched.message && !form.message.trim() ? 'Add a short message' : null,
  }

  const valid = form.name.trim() && EMAIL_RE.test(form.email) && form.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!valid) return

    setSubmitting(true)
    const result = await submitContact(form)
    setSubmitting(false)

    if (result.success) {
      setSent(true)
    } else {
      setSubmitError(result.error ?? 'The message did not send. Email me directly instead.')
    }
  }

  if (sent) {
    return (
      <div className="contact__form">
        <div className="form__success" role="status">
          <h3>Message sent</h3>
          <p>
            Thanks, {form.name.split(' ')[0] || 'there'}. I&apos;ll get back to you within a day
            or two.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          value={form.name}
          onChange={set('name')}
          onBlur={blur('name')}
          autoComplete="name"
        />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={set('email')}
          onBlur={blur('email')}
          autoComplete="email"
        />
        {errors.email && <span className="field__error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={3}
          value={form.message}
          onChange={set('message')}
          onBlur={blur('message')}
        />
        {errors.message && <span className="field__error">{errors.message}</span>}
      </div>
      <button className="send" type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send message'}
      </button>
      {submitError && <p className="form__error" role="alert">{submitError}</p>}
    </form>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__lead">
          <span className="kick">04: Contact</span>
          <h2 id="contact-title">Get in touch</h2>
          <p>
            I&apos;m open to Senior PM roles and occasional freelance work. If you&apos;re
            building something in health tech, or anything where shipping the wrong thing is
            expensive, I&apos;d like to hear about it.
          </p>
          <div className="elsewhere">
            <div>
              <a href="https://linkedin.com/in/davidflynncoutts" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/davidflynncoutts
              </a>
            </div>
            <div>
              <a href="https://github.com/bandicoutts" target="_blank" rel="noopener noreferrer">
                github.com/bandicoutts
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
