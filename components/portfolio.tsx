import Image from 'next/image'

const projects = [
  {
    title: 'Stayright',
    meta: 'stayright.vercel.app · Live',
    description:
      "Skilled Worker visa holders lose ILR eligibility if they're outside the UK more than 180 days in any rolling 12 months. I'm one of them, and the state of the art was a spreadsheet. Stayright tracks absences, flags risk before it becomes a problem, and exports reports the Home Office will actually accept.",
    href: 'https://stayright.vercel.app',
    cta: 'Visit Stayright',
    image: '/stayright.png',
    alt: 'Stayright absence and compliance dashboard',
    caption: 'Fig. 1: Stayright, absence and compliance dashboard.',
  },
  {
    title: 'Halve',
    meta: 'daily puzzle · Next.js · Supabase · Vercel',
    description:
      "A daily logic puzzle designed to feel obvious, but only after you've solved it. One unique answer per board, no guessing. I built the generator, solver and difficulty rating, then spent just as long on the ritual around it: streaks, share cards, and the small feedback that makes a solve feel earned.",
    href: 'https://parity-web-rpwn.vercel.app/',
    cta: 'Play Halve',
    image: '/parity.png',
    alt: 'Halve daily puzzle game',
    caption: 'Fig. 2: Halve, one solution per day.',
    flip: true,
  },
]

export function Portfolio() {
  return (
    <section className="block" id="work" aria-labelledby="projects-title">
      <div className="section-head">
        <span className="section-head__kick">03: both designed, built &amp; shipped solo</span>
        <h2 id="projects-title">Projects</h2>
      </div>

      <div className="projects">
        {projects.map(project => (
          <article
            className={`project${project.flip ? ' project--flip' : ''}`}
            key={project.title}
          >
            <div className="project__text">
              <h3>{project.title}</h3>
              <div className="project__meta">{project.meta}</div>
              <p>{project.description}</p>
              <a className="tlink" href={project.href} target="_blank" rel="noopener noreferrer">
                {project.cta}
              </a>
            </div>
            <div className="project__shot">
              <div className="shot-frame">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={960}
                  height={600}
                />
              </div>
              <div className="figcap">{project.caption}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
