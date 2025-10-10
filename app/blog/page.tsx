'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { blogPosts } from '@/data/blog-posts'
import { fadeInUp, staggerTransition } from '@/lib/animations'

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-3">Blog</h1>
            <p className="text-base text-zinc-400">
              Thoughts on product management, technology, and building great products.
            </p>
          </motion.div>
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={staggerTransition(index)}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
