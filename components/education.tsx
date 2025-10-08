'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Top Business School',
    period: '2016 - 2018',
    description: 'Concentration in Technology Management and Entrepreneurship',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2012 - 2016',
    description: 'Minor in Business Administration, Summa Cum Laude',
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
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
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
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
