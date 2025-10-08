'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  // Replace this with your actual Typeform URL
  const typeformUrl = 'https://form.typeform.com/to/YOUR_FORM_ID'

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-zinc-800 p-2">
                <Mail className="h-5 w-5 text-zinc-400" />
              </div>
              <h2 className="text-sm font-semibold text-zinc-100">Get in touch</h2>
            </div>
            <p className="text-base text-zinc-400 leading-relaxed mb-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
