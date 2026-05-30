'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/components/motion-primitives'

export function Education() {
  return (
    <section className="section section--tight" id="education">
      <div className="wrap">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Education
        </motion.span>
        <motion.div
          className="edu"
          style={{ marginTop: 18 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        >
          <div className="edu__main">
            <b>BSc, Computer Science</b> — University of Auckland
          </div>
          <div className="edu__meta">2018 · Auckland, New Zealand</div>
        </motion.div>
      </div>
    </section>
  )
}
