'use client'

import { motion } from 'framer-motion'

export function Contact() {
  // Replace this with your actual Typeform URL
  const typeformUrl = 'https://form.typeform.com/to/YOUR_FORM_ID'

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Interested in working together? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={typeformUrl}
              className="w-full h-[600px]"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
            Note: Replace the Typeform URL in components/contact.tsx with your actual form URL
          </p>
        </motion.div>
      </div>
    </section>
  )
}
