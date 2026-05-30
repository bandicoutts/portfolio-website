'use client'

import Image from 'next/image'
import { ArrowRight, Download, MapPin } from 'lucide-react'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (el) el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__glow" />
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <span className="eyebrow">Senior Product Manager · London</span>
            <div className="hero__name">
              <Image
                src="/7819-0750.jpg"
                alt="David Flynn-Coutts"
                width={40}
                height={40}
                style={{ borderRadius: '999px', objectFit: 'cover' }}
                priority
              />
              <span><b>David Flynn-Coutts</b> — health tech &amp; telco</span>
            </div>
            <h1>
              PM by role. <em>Builder by habit.</em>
            </h1>
            <p className="hero__lead">
              Eight years in NHS health tech and telco. I&apos;ve shipped clinical integrations,
              fixed broken billing, and built some things in my own time.
            </p>
            <div className="hero__cta">
              <button className="btn btn--primary" onClick={() => scrollTo('contact')}>
                Let&apos;s talk <ArrowRight size={16} strokeWidth={1.75} />
              </button>
              <a className="btn btn--secondary" href="/DavidFlynnCoutts_Resume_May2025.pdf" download>
                <Download size={16} strokeWidth={1.75} /> Download CV
              </a>
            </div>
            <div className="hero__avail">
              <span className="pulse" />
              Open to Senior PM roles &amp; freelance
            </div>
          </div>
          <div className="hero__photo">
            <div className="ring" />
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
          </div>
        </div>
      </div>
    </header>
  )
}
