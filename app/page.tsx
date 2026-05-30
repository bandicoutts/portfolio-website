import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Portfolio } from '@/components/portfolio'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
