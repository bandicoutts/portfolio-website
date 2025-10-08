'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center md:justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
                Senior Product Manager with 6 years of experience in health tech and telecommunications.
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed">
                I have a track record of driving revenue growth, streamlining operations and building products that people like to use. Currently based in London, I specialize in cross-functional leadership, strategic prioritization, and data-driven decision making.
              </p>
            </div>

            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-zinc-700 flex-shrink-0">
              <Image
                src="/headshot.jpeg"
                alt="David Flynn-Coutts"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
