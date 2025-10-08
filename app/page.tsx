import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
