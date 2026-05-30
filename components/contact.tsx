'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { submitContact } from '@/app/actions/contact'
import { BrandIcon } from '@/lib/brand-icons'

const EMAIL_RE = /\S+@\S+\.\S+/

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const blur = (k: keyof typeof touched) => () =>
    setTouched(prev => ({ ...prev, [k]: true }))

  const errors = {
    name: touched.name && !form.name.trim() ? 'Required' : null,
    email: touched.email && !EMAIL_RE.test(form.email) ? 'Enter a valid email' : null,
    message: touched.message && !form.message.trim() ? 'Required' : null,
  }

  const valid = form.name.trim() && EMAIL_RE.test(form.email) && form.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!valid) return
    setSubmitting(true)
    await submitContact(form)
    setSent(true)
    setSubmitting(false)
  }

  if (sent) {
    return (
      <div className="form">
        <div className="form__success">
          <div className="ok">
            <Check size={24} strokeWidth={2.25} />
          </div>
          <h4>Message sent</h4>
          <p>
            Thanks, {form.name.split(' ')[0] || 'there'} — I&apos;ll get back to you within a day or two.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input
            id="c-name"
            value={form.name}
            onChange={set('name')}
            onBlur={blur('name')}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={set('email')}
            onBlur={blur('email')}
            placeholder="you@company.com"
            autoComplete="email"
          />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Message</label>
        <textarea
          id="c-msg"
          rows={4}
          value={form.message}
          onChange={set('message')}
          onBlur={blur('message')}
          placeholder="What would you like to talk about?"
        />
        {errors.message && <span className="field__error">{errors.message}</span>}
      </div>
      <button
        className="btn btn--primary"
        type="submit"
        disabled={submitting}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {submitting ? 'Sending…' : <><span>Send message</span> <ArrowRight size={16} strokeWidth={1.75} /></>}
      </button>
    </form>
  )
}

export function Contact() {
  return (
    <section className="section section--subtle" id="contact">
      <div className="wrap">
        <span className="eyebrow">Let&apos;s talk</span>
        <h2 className="t-h1" style={{ marginTop: 16, marginBottom: 0 }}>
          Hiring, building, or just curious?
        </h2>
        <div className="contact__grid">
          <div>
            <p className="contact__lead">
              I&apos;m open to Senior PM roles and select freelance work. Tell me what you&apos;re
              working on.
            </p>
            <div className="contact__card">
              <Image
                src="/7819-0750.jpg"
                alt="David Flynn-Coutts"
                width={56}
                height={56}
                style={{ borderRadius: '999px', objectFit: 'cover' }}
              />
              <div>
                <div className="nm">David Flynn-Coutts</div>
                <div className="rl">Senior Product Manager</div>
              </div>
            </div>
            <div className="contact__links">
              <a href="https://linkedin.com/in/davidflynncoutts" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="linkedin" size={17} />
                linkedin.com/in/davidflynncoutts
              </a>
              <a href="https://github.com/bandicoutts" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="github" size={17} />
                github.com/bandicoutts
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
