'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { fadeInUp, viewportOnce } from '@/lib/animations'

export function Contact() {
  const typeformUrl = 'https://form.typeform.com/to/nZPxxeiN'
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isIframeLoaded) {
          setIsIframeLoaded(true)
        }
      },
      { rootMargin: '100px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isIframeLoaded])

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Let&apos;s talk</h2>
          <p className="text-base text-zinc-400 leading-relaxed mb-8">
            Interested in working together? Send me an email or fill out the form below.
          </p>

          {/* Email Contact */}
          <div className="mb-8">
            <a
              href="mailto:d.coutts@gmail.com"
              className="inline-flex items-center gap-2 text-lg font-medium text-accent hover:text-accent-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email me
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            {isIframeLoaded ? (
              <iframe
                src={typeformUrl}
                className="w-full h-[600px]"
                frameBorder="0"
                allow="camera; microphone; autoplay; encrypted-media;"
                title="Contact form"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[600px] flex items-center justify-center">
                <div className="text-zinc-500">Loading form...</div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
