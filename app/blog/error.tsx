'use client'

import { ErrorLayout } from '@/components/error-layout'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorLayout
      error={error}
      reset={reset}
      title="Error loading blog"
      message="An error occurred while loading the blog. Please try again."
    />
  )
}
