'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { EASE } from '@/components/motion-primitives'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (el) el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              Senior Product Manager · London
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            >
              PM by role. <em>Builder by habit.</em>
            </motion.h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              Eight years in NHS health tech and telco. I&apos;ve shipped clinical integrations,
              recovered $700K in billing leakage, and built some things in my own time.
            </motion.p>
            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
            >
              <button className="btn btn--primary" onClick={() => scrollTo('contact')}>
                Let&apos;s talk <ArrowRight size={16} strokeWidth={1.75} />
              </button>
              <a className="btn btn--secondary" href="/DavidFlynnCoutts_Resume.pdf" download>
                <Download size={16} strokeWidth={1.75} /> Download CV
              </a>
            </motion.div>
            <motion.div
              className="hero__avail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
            >
              <span className="pulse" />
              Open to Senior PM roles &amp; freelance
            </motion.div>
          </div>
          <motion.div
            className="hero__photo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
          >
            <Image
              src="/7819-0750.jpg"
              alt="David Flynn-Coutts"
              width={300}
              height={360}
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '28px' }}
              priority
            />
            <div className="tag">
              <MapPin size={14} strokeWidth={1.75} />
              London · <b>builds &amp; ships</b>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
