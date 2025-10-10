'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft } from 'lucide-react'
import { use } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/data/blog-posts'
import { fadeInUp } from '@/lib/animations'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-zinc-100 mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-blue-500 hover:text-blue-400 transition-colors">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-6">{post.title}</h1>
            <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-zinc-100">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
