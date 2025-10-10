export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-zinc-800 rounded ${className}`} />
  )
}

export function BlogPostSkeleton() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function BlogPageSkeleton() {
  return (
    <div className="space-y-12">
      {[1, 2, 3].map((i) => (
        <BlogPostSkeleton key={i} />
      ))}
    </div>
  )
}
