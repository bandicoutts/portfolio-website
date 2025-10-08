'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Product Manager',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: [
      'Led product strategy for a portfolio of B2B SaaS products serving 10K+ customers',
      'Increased user engagement by 45% through data-driven feature prioritization',
      'Collaborated with engineering, design, and sales teams to deliver 3 major releases',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Startup Co.',
    period: '2020 - 2022',
    description: [
      'Managed end-to-end product lifecycle for mobile and web applications',
      'Conducted user research and usability testing with 100+ participants',
      'Drove a 30% increase in customer retention through product improvements',
    ],
  },
  {
    title: 'Associate Product Manager',
    company: 'Innovation Labs',
    period: '2018 - 2020',
    description: [
      'Supported senior PMs in roadmap planning and feature specification',
      'Analyzed user data to identify growth opportunities and pain points',
      'Coordinated cross-functional teams to deliver quarterly product updates',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
