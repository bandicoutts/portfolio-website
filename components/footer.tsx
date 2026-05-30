'use client'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (el) el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__intro">
            <span className="brand">
              David Flynn-Coutts<span className="dot">.</span>
            </span>
            <p>
              Senior Product Manager building products people rely on across health tech, telco,
              and a couple of things of my own.
            </p>
            <div className="footer__avail">
              <span className="pulse" />
              Open to roles &amp; freelance
            </div>
          </div>
          <div className="footer__col">
            <h5>Site</h5>
            <a onClick={() => scrollTo('work')}>Projects</a>
            <a onClick={() => scrollTo('experience')}>Experience</a>
            <a onClick={() => scrollTo('contact')}>Contact</a>
          </div>
          <div className="footer__col">
            <h5>Elsewhere</h5>
            <a href="https://linkedin.com/in/davidflynncoutts" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/bandicoutts" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://stayright.vercel.app" target="_blank" rel="noopener noreferrer">
              Stayright
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 David Flynn-Coutts</span>
        </div>
      </div>
    </footer>
  )
}
