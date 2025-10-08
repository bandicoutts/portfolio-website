'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    description:
      'Led the complete redesign of an e-commerce platform, resulting in a 60% increase in conversion rates and improved user satisfaction scores.',
    technologies: ['Product Strategy', 'UX Research', 'A/B Testing'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/placeholder-project-1.jpg',
  },
  {
    title: 'Mobile App Launch',
    description:
      'Spearheaded the development and launch of a mobile app that acquired 50K users in the first 3 months with a 4.8-star rating.',
    technologies: ['Mobile Product', 'Growth Strategy', 'Analytics'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/placeholder-project-2.jpg',
  },
  {
    title: 'AI-Powered Feature Suite',
    description:
      'Conceptualized and delivered a suite of AI-powered features that reduced user task completion time by 40% and increased engagement.',
    technologies: ['AI/ML', 'Feature Development', 'User Testing'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/placeholder-project-3.jpg',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Built a comprehensive analytics dashboard that empowered business users to make data-driven decisions, adopted by 90% of the company.',
    technologies: ['Data Products', 'Visualization', 'Stakeholder Management'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/placeholder-project-4.jpg',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
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
