import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
