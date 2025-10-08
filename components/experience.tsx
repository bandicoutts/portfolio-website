'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experiences'

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l border-zinc-800 pl-8 space-y-8">
            <h2 className="text-sm font-semibold text-zinc-100">Work Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-zinc-700" />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-base font-semibold text-zinc-100">{exp.title}</h3>
                    <p className="text-sm text-zinc-500">{exp.period}</p>
                  </div>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-400 leading-relaxed">
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
