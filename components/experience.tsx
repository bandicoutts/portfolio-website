'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experiences'
import type { ExperiencePoint } from '@/types'
import { EASE } from '@/components/motion-primitives'

const xpContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const xpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function Point({ parts }: { parts: ExperiencePoint }) {
  return (
    <li>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span className="fig" key={i}>{p}</span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </li>
  )
}

export function Experience() {
  return (
    <section className="section section--subtle" id="experience">
      <div className="wrap">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Experience
        </motion.span>
        <motion.h2
          className="t-h1"
          style={{ marginTop: 16, marginBottom: 0 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
        >
          Where I&apos;ve moved the numbers.
        </motion.h2>
        <motion.div
          className="xp"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={xpContainer}
        >
          {experiences.map((x, i) => (
            <motion.div
              key={i}
              variants={xpItem}
              className={'xp__item' + (x.current ? ' is-current' : '')}
            >
              <div className="xp__head">
                <div>
                  <div className="xp__role">
                    {x.role} <span className="org">· {x.org}</span>
                  </div>
                  <div className="xp__where">
                    {x.where}{x.context ? <span className="xp__context"> · {x.context}</span> : null}
                  </div>
                </div>
                <div className="xp__when">{x.when}</div>
              </div>
              {x.points.length > 0 && (
                <ul className="xp__body">
                  {x.points.map((p, j) => (
                    <Point key={j} parts={p} />
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
