'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, defaultTransition } from '@/lib/animations'

export function Hero() {
  return (
    <section id="about" className="pt-32 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={defaultTransition}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/headshot.jpeg"
              alt="David Flynn-Coutts"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
              David Flynn-Coutts
            </h1>

            <p className="text-2xl sm:text-3xl font-light text-zinc-400 mb-8">
              Senior Product Manager
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Six years building health tech and telco products. Track record: revenue growth, operational efficiency, user-centered execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
