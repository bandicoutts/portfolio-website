'use client'

import { useState } from 'react'
import { Check, ArrowUpRight, Sparkles } from 'lucide-react'

function StayrightCard() {
  return (
    <div className="sr">
      <div>
        <span className="pill pill--live">
          <span className="dot" />
          Live · actively growing
        </span>
        <h3 className="sr__title">Stayright</h3>
        <p className="sr__desc">
          Skilled Worker visa holders risk losing ILR eligibility if they exceed 180 days outside
          the UK in any rolling year. I hit this problem personally, found no tooling worth using,
          and built one. StayRight is a live SaaS product — absence tracking, real-time compliance
          risk, audit-ready exports. Designed, built, and shipped by me. Paying users. Growing.
        </p>
        <ul className="sr__feat">
          <li>
            <Check size={17} strokeWidth={2} />
            Real product with paying intent and traction
          </li>
          <li>
            <Check size={17} strokeWidth={2} />
            Designed, built and shipped end-to-end
          </li>
          <li>
            <Check size={17} strokeWidth={2} />
            Evidence I operate as builder, not just manager
          </li>
        </ul>
        <a className="linkout" href="https://stayright.vercel.app" target="_blank" rel="noopener noreferrer">
          stayright.vercel.app <ArrowUpRight size={15} strokeWidth={1.75} />
        </a>
      </div>
      <div className="browser">
        <div className="browser__bar">
          <i /><i /><i />
          <span className="browser__url">stayright.vercel.app/dashboard</span>
        </div>
        <div className="browser__screen">
          <div className="mock-row">
            <span className="mock-title">Compliance</span>
            <span className="mock-btn">New trip</span>
          </div>
          <div className="mock-cards">
            <div className="mock-card">
              <div className="k">Days Used</div>
              <div className="v">94</div>
            </div>
            <div className="mock-card">
              <div className="k">Remaining</div>
              <div className="v accent">86</div>
            </div>
            <div className="mock-card">
              <div className="k">Status</div>
              <div className="v">Safe</div>
            </div>
          </div>
          <div className="mock-list">
            {[72, 85, 58].map((w, i) => (
              <div className="mock-li" key={i}>
                <span className="av" />
                <span className="ln" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const CYCLE = ['tile--n', 'tile--y', 'tile--g', 'tile--b'] as const
type TileClass = typeof CYCLE[number]

function ParityCard() {
  const init: TileClass[] = ['tile--y', 'tile--n', 'tile--b', 'tile--g', 'tile--n', 'tile--y']
  const [tiles, setTiles] = useState<TileClass[]>(init)
  const letters = ['P', 'A', 'R', 'I', 'T', 'Y']

  const bump = (i: number) =>
    setTiles((t) =>
      t.map((c, j) =>
        j === i ? CYCLE[(CYCLE.indexOf(c) + 1) % CYCLE.length] : c
      )
    )

  return (
    <div className="pr">
      <div>
        <span
          className="pill"
          style={{
            color: 'var(--accent-text)',
            border: '1px solid rgba(79,124,250,.35)',
            background: 'var(--accent-tint)',
          }}
        >
          Daily puzzle · for fun
        </span>
        <h3 className="pr__title">Parity</h3>
        <p className="pr__desc">
          A 6×6 grid of fire and water, solved by deduction alone — no guessing, one solution. I
          wrote the game rules, built the puzzle engine (generator, solver, uniqueness verifier,
          difficulty rating), and shipped the full stack: a custom design system with locked tokens,
          Next.js, Supabase, and Vercel. The interesting part wasn&apos;t the engineering. It was
          making every decision myself — grid constraints, type scale, streak UX, share-card copy —
          and discovering which ones were actually hard.
        </p>
        <div className="pr__tags">
          <span>Next.js</span>
          <span>Supabase</span>
          <span>Vercel</span>
          <span>custom design system</span>
        </div>
        <span className="linkout" style={{ cursor: 'default' }}>
          Built for curiosity &amp; range <Sparkles size={15} strokeWidth={1.75} />
        </span>
      </div>
      <div>
        <div className="tiles">
          {tiles.map((c, i) => (
            <div
              key={i}
              className={`tile ${c}`}
              onClick={() => bump(i)}
              role="button"
              aria-label={`Tile ${letters[i]}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && bump(i)}
            >
              {letters[i]}
            </div>
          ))}
        </div>
        <div className="pr__hint">tap the tiles ↑</div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <span className="eyebrow">Selected work</span>
        <h2 className="t-h1" style={{ marginTop: 16, marginBottom: 8 }}>
          Things I&apos;ve actually built.
        </h2>
        <p className="t-lead" style={{ maxWidth: 520, margin: 0 }}>
          Two projects, two different intentions — one a real product, one an experiment.
        </p>
        <div className="work">
          <StayrightCard />
          <ParityCard />
        </div>
      </div>
    </section>
  )
}
