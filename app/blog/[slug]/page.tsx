import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { blogPosts } from '@/data/blog-posts'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="plain-page">
          <section className="plain-page__inner" aria-labelledby="missing-note-title">
            <span className="plain-page__kicker">Notes</span>
            <h1 id="missing-note-title">That note is not published.</h1>
            <p>
              It may have moved, or it may be part of the writing I took offline while tightening
              the site.
            </p>
            <Link className="tlink" href="/blog">
              Back to notes
            </Link>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="plain-page">
        <article className="article-page">
          <Link className="tlink" href="/blog">
            Back to notes
          </Link>
          <div className="article-page__meta">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="article-page__body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
