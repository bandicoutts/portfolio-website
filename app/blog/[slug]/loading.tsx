import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogPostLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Skeleton className="h-4 w-32 mb-8" />
          <div className="flex items-center gap-4 text-sm mb-8">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-10 w-3/4 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
