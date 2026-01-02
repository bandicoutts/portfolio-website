'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experiences'
import { fadeInUp, staggerTransition, viewportOnce } from '@/lib/animations'

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <h2 className="text-2xl font-semibold text-zinc-100 mb-16">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                transition={staggerTransition(index)}
                className="group relative pb-12 border-b border-zinc-800 last:border-b-0 last:pb-0"
              >
                <div className="space-y-6 pl-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-base font-medium text-zinc-400">{exp.company}</p>
                    <p className="text-sm text-zinc-500">{exp.period} • {exp.location}</p>
                  </div>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-8">
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-3xl font-bold text-accent tabular-nums">{metric.value}</span>
                          <span className="text-sm text-zinc-500 mt-1">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-base text-zinc-400 leading-relaxed">
                        <span className="text-zinc-600 mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
