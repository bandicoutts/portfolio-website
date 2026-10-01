const roles = [
  {
    company: 'Consultant Connect',
    location: 'London, UK',
    when: 'Aug 2021 to May 2026',
    title: 'Senior Product Manager',
    paragraphs: [
      <>
        Owned Consultant Connect&apos;s web, iOS and Android products and led six engineers and two
        product managers. The platform helps GPs get specialist advice before referring patients
        to hospital.
      </>,
      <>
        Led the rollout of photo-based dermatology across all <span className="n">14</span>{' '}
        Scottish health boards, including secure links to national login and patient-matching
        systems. Active users grew from <span className="n">4,000</span> to{' '}
        <span className="n">7,000</span> in the first year. The rollout helped retain{' '}
        <span className="n">£2M</span> in contracts and grow Scottish revenue{' '}
        <span className="n">20%</span> over two years.
      </>,
      <>
        Built an AI feature that transcribes calls and identifies the clinical outcome. On one
        service, recorded outcomes rose from <span className="n">4%</span> to{' '}
        <span className="n">97%</span>. Also shipped integrations with EMIS and SystmOne that send{' '}
        <span className="n">800+</span> clinical documents to GP records each day, with a{' '}
        <span className="n">96%</span> acceptance rate.
      </>,
    ],
    figures: [
      { value: '7,000', label: 'active users after year one' },
      { value: '£2M', label: 'at-risk contracts retained' },
    ],
  },
  {
    company: 'Vodafone New Zealand',
    location: 'Auckland, NZ',
    when: 'Jan 2020 to Aug 2021',
    title: 'Product Manager',
    paragraphs: [
      <>
        Owned Vodafone NZ&apos;s business broadband products. After staff raised repeated billing
        complaints, I worked with an analyst to find a pricing error affecting{' '}
        <span className="n">1,500</span> accounts. Fixing it recovered{' '}
        <span className="n">NZ$700K</span> in three months at a cost of NZ$12K.
      </>,
      <>
        Launched Business Wireless Broadband after building the case around available network
        capacity. It reached <span className="n">1,000</span> live connections in its first month
        and grew roughly <span className="n">25%</span> month on month for six months.
      </>,
    ],
    figures: [{ value: '58×', label: 'return on the recovery work' }],
  },
  {
    company: 'Skinny Mobile',
    location: 'Auckland, NZ, a Spark venture',
    when: 'Jan 2018 to Dec 2019',
    title: 'Product & Propositions Manager',
    paragraphs: [
      <>
        Moved into product from Skinny&apos;s customer care team and managed its website, app,
        self-service and support tools. Promotional campaigns increased customer spend{' '}
        <span className="n">25%</span> and reduced churn <span className="n">10%</span> while they
        ran.
      </>,
      <>
        Rebuilt the help site on a new API layer. Page loads became <span className="n">60%</span>{' '}
        faster and monthly page views rose <span className="n">130%</span>.
      </>,
    ],
    figures: [{ value: '-10%', label: 'churn during campaigns' }],
  },
]

export function Experience() {
  return (
    <>
      <section className="block" id="experience" aria-labelledby="experience-title">
        <div className="section-head">
          <span className="section-head__kick">2018 to 2026</span>
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
          BSc Computer Science, University of Auckland, 2018.
        </p>
      </div>
    </>
  )
}
