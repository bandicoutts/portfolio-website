import { experiences } from '@/data/experiences'
import type { ExperiencePoint } from '@/types'

function Point({ parts }: { parts: ExperiencePoint }) {
  return (
    <li>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span className="fig" key={i}>{p}</span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </li>
  )
}

export function Experience() {
  return (
    <section className="section section--subtle" id="experience">
      <div className="wrap">
        <span className="eyebrow">Experience</span>
        <h2 className="t-h1" style={{ marginTop: 16, marginBottom: 0 }}>
          Where I&apos;ve moved the numbers.
        </h2>
        <div className="xp">
          {experiences.map((x, i) => (
            <div key={i} className={'xp__item' + (x.current ? ' is-current' : '')}>
              <div className="xp__head">
                <div>
                  <div className="xp__role">
                    {x.role} <span className="org">· {x.org}</span>
                  </div>
                  <div className="xp__where">{x.where}</div>
                </div>
                <div className="xp__when">{x.when}</div>
              </div>
              {x.points.length > 0 && (
                <ul className="xp__body">
                  {x.points.map((p, j) => (
                    <Point key={j} parts={p} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
