'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface ErrorLayoutProps {
  error: Error & { digest?: string }
  reset: () => void
  title?: string
  message?: string
}

export function ErrorLayout({
  error,
  reset,
  title = 'This page did not load.',
  message = 'Try again, or head back to the homepage if it keeps happening.'
}: ErrorLayoutProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navigation />
      <main className="plain-page">
        <section className="plain-page__inner" aria-labelledby="error-title">
          <span className="plain-page__kicker">Error</span>
          <h1 id="error-title">{title}</h1>
          <p>{message}</p>
          <div className="plain-page__actions">
            <Button onClick={reset} variant="primary" className="plain-button">
              Try again
            </Button>
            <Link href="/">
              <Button variant="secondary" className="plain-button plain-button--secondary">
                Back to the homepage
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
