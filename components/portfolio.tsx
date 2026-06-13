import Image from 'next/image'

const projects = [
  {
    title: 'Stayright',
    meta: 'stayright.vercel.app · Live',
    description:
      'Skilled Worker visa holders lose ILR eligibility if they spend more than 180 days outside the UK in any rolling 12 months. I had this problem myself, and the available tools were spreadsheets. Stayright tracks absences, flags compliance risk in real time and exports audit-ready reports.',
    href: 'https://stayright.vercel.app',
    cta: 'Visit Stayright',
    image: '/stayright.png',
    alt: 'Stayright absence and compliance dashboard',
    caption: 'Fig. 1 — Stayright, absence and compliance dashboard.',
  },
  {
    title: 'Halve',
    meta: 'daily puzzle · Next.js · Supabase · Vercel',
    description:
      'Halve is a daily logic puzzle designed to feel obvious only after you solve it. Every board has one unique answer and no guessing. I built the generator, solver, uniqueness checks and difficulty rating, then shaped the product around the ritual: streaks, share cards, responsive grids and the small bits of feedback that make a solve feel earned.',
    href: 'https://parity-web-rpwn.vercel.app/',
    cta: 'Play Halve',
    image: '/parity.png',
    alt: 'Halve daily puzzle game',
    caption: 'Fig. 2 — Halve, one solution per day.',
    flip: true,
  },
]

export function Portfolio() {
  return (
    <section className="block" id="work" aria-labelledby="projects-title">
      <div className="section-head">
        <span className="section-head__kick">03 — both designed, built &amp; shipped solo</span>
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
