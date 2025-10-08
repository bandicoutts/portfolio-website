'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft } from 'lucide-react'
import { use } from 'react'

// This would normally come from a CMS or markdown files
const blogPosts: Record<string, {
  title: string
  date: string
  readTime: string
  content: string
}> = {
  'first-post': {
    title: 'Building Better Products Through User Research',
    date: '2024-01-15',
    readTime: '5 min read',
    content: `
# Building Better Products Through User Research

User research is the cornerstone of successful product development. By understanding your users&apos; needs, pain points, and behaviors, you can create products that truly resonate with your target audience.

## Why User Research Matters

In today&apos;s competitive landscape, assumptions about what users want can be costly. User research provides:

- **Data-driven insights** into user behavior
- **Validation** of product ideas before development
- **Reduced risk** of building the wrong features
- **Increased user satisfaction** and retention

## Getting Started with User Research

Here are some key steps to incorporate user research into your product development process:

1. Define clear research objectives
2. Choose appropriate research methods
3. Recruit representative participants
4. Conduct interviews and observations
5. Analyze and synthesize findings
6. Share insights with stakeholders

## Conclusion

Investing in user research pays dividends throughout the product lifecycle. Start small, iterate, and build a culture of user-centricity in your organization.
    `,
  },
  'second-post': {
    title: 'The Art of Prioritization in Product Management',
    date: '2024-01-08',
    readTime: '7 min read',
    content: `
# The Art of Prioritization in Product Management

Prioritization is one of the most challenging aspects of product management. With limited resources and unlimited ideas, how do you decide what to build next?

## Common Prioritization Frameworks

- **RICE**: Reach, Impact, Confidence, Effort
- **MoSCoW**: Must have, Should have, Could have, Won&apos;t have
- **Value vs. Effort**: Simple 2x2 matrix
- **Kano Model**: Categorizing features by user satisfaction

## Finding the Right Approach

The best framework depends on your context, team size, and product maturity. Experiment with different approaches and adapt them to your needs.
    `,
  },
  'third-post': {
    title: 'Data-Driven Decision Making for Product Managers',
    date: '2024-01-01',
    readTime: '6 min read',
    content: `
# Data-Driven Decision Making for Product Managers

In the age of big data, product managers have access to more information than ever before. But having data is not enough—you need to know how to use it effectively.

## Key Metrics to Track

- User engagement metrics
- Conversion rates
- Retention and churn
- Feature adoption
- Customer satisfaction scores

## Building a Data-Informed Culture

Encourage your team to question assumptions, run experiments, and let data guide decisions while maintaining a healthy balance with qualitative insights.
    `,
  },
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts[slug]

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
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
      <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-500 mb-8">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) {
                  return <h1 key={i} className="text-4xl font-bold mt-8 mb-4">{line.substring(2)}</h1>
                } else if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-3xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>
                } else if (line.startsWith('- ')) {
                  return <li key={i} className="ml-6 mb-2">{line.substring(2)}</li>
                } else if (line.trim() === '') {
                  return <br key={i} />
                } else if (line.match(/^\d+\./)) {
                  return <li key={i} className="ml-6 mb-2 list-decimal">{line.substring(line.indexOf('.') + 2)}</li>
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="mb-4"><strong>{line.substring(2, line.length - 2)}</strong></p>
                } else {
                  return <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">{line}</p>
                }
              })}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
