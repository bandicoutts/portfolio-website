'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Product Manager
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate product manager with a track record of delivering
              innovative solutions that drive business growth and enhance user
              experiences. With expertise in product strategy, user research, and
              cross-functional team leadership, I transform complex challenges into
              elegant, user-centered products.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              <Image
                src="/placeholder-profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
