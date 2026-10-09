'use client'

const links = [
  { label: 'Work notes', id: 'record' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'work' },
  { label: 'Contact', id: 'contact' },
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
    <header className="masthead" id="top">
      <div className="masthead__identity">
        <button className="masthead__name" onClick={() => scrollTo('top')}>
          David Flynn-Coutts
        </button>
        <span className="masthead__meta">Auckland, New Zealand</span>
      </div>
      <nav className="indexrow" aria-label="Primary navigation">
        {links.map(({ label, id }) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
        <a className="nav-cv" href="/DavidFlynnCoutts_Resume.pdf" download>
          CV <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
