import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogPageSkeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-3">Blog</h1>
            <p className="text-base text-zinc-400">
              Thoughts on product management, technology, and building great products.
            </p>
          </div>
          <BlogPageSkeleton />
        </div>
      </main>
      <Footer />
    </>
  )
}
