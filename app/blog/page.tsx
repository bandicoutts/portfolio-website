import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="plain-page">
        <section className="plain-page__inner" aria-labelledby="notes-title">
          <span className="plain-page__kicker">Notes</span>
          <h1 id="notes-title">No public notes yet.</h1>
          <p>
            I&apos;ve taken the draft posts offline for now. When I publish writing here, it should
            be specific enough to earn its place.
          </p>
          {blogPosts.length > 0 && (
            <div className="plain-list">
              {blogPosts.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <article>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          )}
          <Link className="tlink" href="/">
            Back to the homepage
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
