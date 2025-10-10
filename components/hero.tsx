'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, defaultTransition } from '@/lib/animations'

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={defaultTransition}
          className="flex flex-col items-center"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-700 mb-6">
            <Image
              src="/headshot.jpeg"
              alt="David Flynn-Coutts"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            Senior Product Manager with 6 years of experience in health tech and telecommunications.
          </h1>

          <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
            I have a track record of driving revenue growth, streamlining operations and building products that people like to use. Currently based in London, I specialize in cross-functional leadership, strategic prioritization, and data-driven decision making.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
