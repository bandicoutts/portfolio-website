'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  // Replace this with your actual Typeform URL
  const typeformUrl = 'https://form.typeform.com/to/YOUR_FORM_ID'

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Get in touch</h2>
          <p className="text-base text-zinc-400 leading-relaxed mb-8">
            Interested in working together? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <iframe
              src={typeformUrl}
              className="w-full h-[600px]"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              title="Contact form"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
