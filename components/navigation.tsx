'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'

const BRAND_PATHS = {
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
}

function BrandIcon({ name, size = 18 }: { name: keyof typeof BRAND_PATHS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
      <path d={BRAND_PATHS[name]} />
    </svg>
  )
}

const links = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'contact' },
]

function scrollTo(id: string) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'instant' : 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'instant' : 'smooth' })
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const go = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="nav">
      <div className="nav__inner">
        <button className="brand" onClick={() => go('top')} style={{ background: 'none', border: 'none', padding: 0 }}>
          David Flynn-Coutts<span className="dot">.</span>
        </button>
        <div className="nav__right">
          <div className="nav__links">
            {links.map(({ label, id }) => (
              <a key={id} onClick={() => go(id)}>{label}</a>
            ))}
          </div>
          <button className="iconbtn" onClick={toggleTheme} aria-label="Toggle colour theme">
            {resolvedTheme === 'dark' ? <Sun size={17} strokeWidth={1.75} /> : <Moon size={17} strokeWidth={1.75} />}
          </button>
          <button className="btn btn--primary" onClick={() => go('contact')}>
            Let&apos;s talk
          </button>
          <div className="nav__div" />
          <div className="nav__social">
            <a href="https://github.com/bandicoutts" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BrandIcon name="github" size={18} />
            </a>
            <a href="https://linkedin.com/in/davidflynncoutts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BrandIcon name="linkedin" size={18} />
            </a>
          </div>
          <button className="iconbtn hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map(({ label, id }) => (
            <a key={id} onClick={() => go(id)}>{label}</a>
          ))}
          <button className="btn btn--primary" onClick={() => go('contact')}>
            Let&apos;s talk
          </button>
        </div>
      )}
    </nav>
  )
}
