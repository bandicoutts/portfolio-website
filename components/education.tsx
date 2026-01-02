'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { fadeInUp, staggerTransition, viewportOnce } from '@/lib/animations'

export function Education() {
  return (
    <section id="education" className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <h2 className="text-2xl font-semibold text-zinc-100 mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.period}`}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                transition={staggerTransition(index)}
                className="group relative pb-8 border-b border-zinc-800 last:border-b-0 last:pb-0"
              >
                <div className="space-y-2 pl-6">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{edu.degree}</h3>
                  <p className="text-base font-medium text-zinc-400">{edu.institution}</p>
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
