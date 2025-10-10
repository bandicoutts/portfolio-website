'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { fadeInUp, staggerTransition, viewportOnce } from '@/lib/animations'

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <h2 className="text-2xl font-bold text-zinc-100 mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.period}`}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                transition={staggerTransition(index)}
                className="border-l-2 border-zinc-800 pl-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-zinc-100">{edu.degree}</h3>
                  <p className="text-base text-zinc-400">{edu.institution}</p>
                  <p className="text-sm text-zinc-500">{edu.period} • {edu.location}</p>
                  {edu.description && <p className="text-base text-zinc-400 mt-3">{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
