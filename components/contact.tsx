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
            Interested in working together? Fill out the form below.
          </p>
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
