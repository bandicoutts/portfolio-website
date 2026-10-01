import Image from 'next/image'

const projects = [
  {
    title: 'Stayright',
    meta: 'stayright.vercel.app / live',
    description:
      "I built Stayright after tracking my own UK visa absences in a spreadsheet. It counts days outside the country, warns when an absence approaches the settlement limit, and exports a clear travel record.",
    href: 'https://stayright.vercel.app',
    cta: 'Visit Stayright',
    image: '/stayright.png',
    alt: 'Stayright absence and compliance dashboard',
    caption: 'Stayright absence and compliance dashboard.',
  },
  {
    title: 'Halve',
    meta: 'daily puzzle / Next.js / Supabase / Vercel',
    description:
      'A daily logic puzzle with one valid solution per board. I built the puzzle generator, solver and difficulty rating, along with streaks and share cards.',
    href: 'https://parity-web-rpwn.vercel.app/',
    cta: 'Play Halve',
    image: '/parity.png',
    alt: 'Halve daily puzzle game',
    caption: 'Halve, one solution per day.',
    flip: true,
  },
]

export function Portfolio() {
  return (
    <section className="block" id="work" aria-labelledby="projects-title">
      <div className="section-head">
        <span className="section-head__kick">Designed, built and shipped solo</span>
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
            <a
              className="project__shot"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.cta}, opens in a new tab`}
            >
              <div className="shot-frame">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={960}
                  height={600}
                />
              </div>
              <div className="figcap">{project.caption}</div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
