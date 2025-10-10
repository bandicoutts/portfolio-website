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
  title = 'Something went wrong',
  message = 'An error occurred while loading this page. Please try again.'
}: ErrorLayoutProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">{title}</h1>
          <p className="text-zinc-400 mb-8">{message}</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={reset} variant="primary">
              Try again
            </Button>
            <Link href="/">
              <Button variant="secondary">Go home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
