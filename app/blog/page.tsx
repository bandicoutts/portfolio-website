'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

// Placeholder blog posts - replace with your actual blog data
const blogPosts = [
  {
    slug: 'first-post',
    title: 'Building Better Products Through User Research',
    excerpt: 'Learn how conducting thorough user research can transform your product development process and lead to better outcomes.',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    slug: 'second-post',
    title: 'The Art of Prioritization in Product Management',
    excerpt: 'Explore frameworks and strategies for effectively prioritizing features and managing competing stakeholder demands.',
    date: '2024-01-08',
    readTime: '7 min read',
  },
  {
    slug: 'third-post',
    title: 'Data-Driven Decision Making for Product Managers',
    excerpt: 'Discover how to leverage data analytics to make informed product decisions and measure success.',
    date: '2024-01-01',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Thoughts on product management, technology, and building great products.
            </p>
          </motion.div>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>
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
