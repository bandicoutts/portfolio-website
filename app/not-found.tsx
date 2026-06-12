import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="plain-page">
        <section className="plain-page__inner" aria-labelledby="not-found-title">
          <span className="plain-page__kicker">404</span>
          <h1 id="not-found-title">That page is not here.</h1>
          <p>It may have moved during the redesign, or the link may be out of date.</p>
          <Link className="tlink" href="/">
            Back to the homepage
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
