'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { EASE } from '@/components/motion-primitives'

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

function StayrightCard() {
  return (
    <div className="sr">
      <div>
        <span className="pill pill--live">
          <span className="dot" />
          Live · in development
        </span>
        <h3 className="sr__title">Stayright</h3>
        <p className="sr__desc">
          Skilled Worker visa holders risk losing ILR eligibility if they exceed 180 days outside
          the UK in any rolling year. I hit this problem personally, found no tooling worth using,
          and built one. Absence tracking, real-time compliance risk, audit-ready exports. Built
          solo.
        </p>
        <a className="linkout" href="https://stayright.vercel.app" target="_blank" rel="noopener noreferrer">
          stayright.vercel.app <ArrowUpRight size={15} strokeWidth={1.75} />
        </a>
      </div>
      <div className="browser">
        <div className="browser__bar">
          <i /><i /><i />
          <span className="browser__url">stayright.vercel.app/dashboard</span>
        </div>
        <div className="browser__screen" style={{ padding: 0, overflow: 'hidden' }}>
          <Image
            src="/stayright.png"
            alt="Stayright dashboard"
            width={600}
            height={400}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </div>
      </div>
    </div>
  )
}

function ParityCard() {
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
          A daily deduction puzzle: 6×6 grid, one solution per day, no guessing allowed. Built
          the puzzle engine (generator, solver, uniqueness verifier, difficulty rating) and
          shipped the full stack. The interesting part wasn&apos;t the code. It was making every
          decision myself: grid constraints, type scale, streak UX, share-card copy. And
          discovering which ones were actually hard.
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
      <div className="browser">
        <div className="browser__bar">
          <i /><i /><i />
          <span className="browser__url">Parity</span>
        </div>
        <div className="browser__screen" style={{ padding: 0, overflow: 'hidden' }}>
          <Image
            src="/parity.png"
            alt="Parity puzzle game"
            width={600}
            height={400}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Projects
        </motion.span>
        <motion.h2
          className="t-h1"
          style={{ marginTop: 16, marginBottom: 8 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
        >
          Things I&apos;ve built.
        </motion.h2>
        <motion.p
          className="t-lead"
          style={{ maxWidth: 520, margin: 0 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.14 }}
        >
          One for a real problem. One for fun.
        </motion.p>
        <motion.div
          className="work"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={cardVariants}>
            <StayrightCard />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ParityCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
