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
      title="The notes page did not load."
      message="Try again, or head back to the homepage."
    />
  )
}
