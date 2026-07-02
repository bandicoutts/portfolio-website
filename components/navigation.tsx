'use client'

const links = [
  { label: 'The record', id: 'record', no: '01' },
  { label: 'Experience', id: 'experience', no: '02' },
  { label: 'Projects', id: 'work', no: '03' },
  { label: 'Contact', id: 'contact', no: '04' },
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
  return (
    <>
      <header className="masthead" id="top">
        <button className="masthead__name" onClick={() => scrollTo('top')}>
          David Flynn-Coutts
        </button>
        <span className="masthead__meta">
          Senior Product Manager · London, <em>open to Senior PM roles &amp; select freelance</em>
        </span>
      </header>
      <nav className="indexrow" aria-label="Primary navigation">
        {links.map(({ label, id, no }) => (
          <a key={id} href={`#${id}`}>
            <span className="no">{no}</span>: {label}
          </a>
        ))}
        <a href="/DavidFlynnCoutts_Resume.pdf" download>
          <span className="no">PDF</span>: Download CV
        </a>
      </nav>
    </>
  )
}
