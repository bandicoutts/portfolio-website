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
          <h2 className="text-2xl font-bold text-zinc-100 mb-12">Work Experience</h2>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                transition={staggerTransition(index)}
                className="border-l-2 border-zinc-800 pl-6 space-y-6"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">{exp.title}</h3>
                    <p className="text-base text-zinc-400">{exp.company}</p>
                    <p className="text-sm text-zinc-500">{exp.period} • {exp.location}</p>
                  </div>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-6 py-4">
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-3xl font-bold text-accent">{metric.value}</span>
                          <span className="text-sm text-zinc-500">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-base text-zinc-400 leading-relaxed">
                        {item}
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
