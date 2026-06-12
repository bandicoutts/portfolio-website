const roles = [
  {
    company: 'Consultant Connect',
    location: 'London, UK',
    when: 'Aug 2021 — May 2026',
    title: 'Senior Product Manager',
    paragraphs: [
      <>
        Led iOS, Android, web, AI and integration products across NHS primary and secondary care,
        balancing clinical safety, adoption and revenue retention in live regulated services.
      </>,
      <>
        Expanded digital dermatology across all <span className="n">14</span> NHS Scotland health
        boards and <span className="n">535</span> GP practices. Retained{' '}
        <span className="n">£2M</span> in at-risk contracts, grew Scotland revenue{' '}
        <span className="n">20%</span> and processed <span className="n">13,000+</span> referrals.
      </>,
      <>
        Shipped Automated Outcomes and GP-record integrations into EMIS and SystmOne, moving one
        NHS service from <span className="n">4%</span> to <span className="n">97%</span> outcome
        capture and routing <span className="n">800+</span> clinical documents a day with zero
        clinical data loss.
      </>,
    ],
    figures: [
      { value: '13,000', label: 'referrals processed in year one' },
      { value: '£2M', label: 'at-risk contracts retained' },
    ],
  },
  {
    company: 'Vodafone New Zealand',
    location: 'Auckland, NZ',
    when: 'Jan 2020 — Aug 2021',
    title: 'Product Manager',
    paragraphs: [
      <>
        Owned pricing integrity and billing experience for broadband products, where small
        configuration errors could create material revenue leakage.
      </>,
      <>
        Found systemic billing leakage through data analysis, corrected{' '}
        <span className="n">1,500</span> undercharged accounts and recovered{' '}
        <span className="n">NZ$700K</span> in three months at a cost of NZ$12K.
      </>,
      <>
        Launched Business Wireless Broadband: <span className="n">1,000</span> live connections in
        month one, then roughly{' '}
        <span className="n">25%</span> month-on-month growth for six months.
      </>,
    ],
    figures: [{ value: '58×', label: 'return on the recovery work' }],
  },
  {
    company: 'Skinny Mobile',
    location: "Auckland, NZ · Vodafone's prepaid brand",
    when: 'Jan 2018 — Dec 2019',
    title: 'Product & Propositions Manager',
    paragraphs: [
      <>
        Led propositions for a high-volume consumer mobile brand, balancing promotional
        experimentation with margin and churn constraints.
      </>,
      <>
        Ran targeted promotions such as Free Data Weekends: customer spend up{' '}
        <span className="n">25%</span>, churn down <span className="n">10%</span> year on year.
        Rebuilt the self-service help site: page views up <span className="n">130%</span>, load
        times down <span className="n">60%</span>, fewer customers needing Level 1 support.
      </>,
    ],
    figures: [{ value: '-10%', label: 'churn, year on year' }],
  },
]

export function Experience() {
  return (
    <>
      <section className="block" id="experience" aria-labelledby="experience-title">
        <div className="section-head">
          <span className="section-head__kick">02 — 2016 to 2026</span>
          <h2 id="experience-title">Experience</h2>
        </div>

        {roles.map(role => (
          <article className="role" key={`${role.company}-${role.title}`}>
            <div className="role__meta">
              <div className="role__company">{role.company}</div>
              <div>{role.location}</div>
              <div>{role.when}</div>
            </div>
            <div className="role__body">
              <h3>{role.title}</h3>
              {role.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="role__figures" aria-label={`${role.company} figures`}>
              {role.figures.map(figure => (
                <div key={figure.value}>
                  <div className="role__num">{figure.value}</div>
                  <div className="role__label">{figure.label}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="earlier">
        <p>
          Earlier: Spark New Zealand · technical escalations and software development · 2016 – 2018
          · BSc Computer Science, University of Auckland
        </p>
      </div>
    </>
  )
}
