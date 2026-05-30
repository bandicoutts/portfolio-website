'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { BrandIcon } from '@/lib/brand-icons'

const links = [
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'work' },
  { label: 'Education', id: 'education' },
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
  const [activeId, setActiveId] = useState<string>('')
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const ids = links.map(l => l.id)
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-64px 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

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
              <a key={id} onClick={() => go(id)} className={activeId === id ? 'is-active' : ''}>{label}</a>
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
