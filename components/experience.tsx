const roles = [
  {
    company: 'Consultant Connect',
    location: 'London, UK',
    when: 'Aug 2021 to May 2026',
    title: 'Senior Product Manager',
    paragraphs: [
      <>
        Five years leading iOS, Android, web, AI and integration products end to end across NHS
        primary and secondary care: eRS, EMIS, SystmOne, GP records, national demographics.
      </>,
      <>
        Scotland&apos;s GPs were photographing patients&apos; skin conditions on their phones and
        saving them to camera rolls. I led the fix, a national digital dermatology service,
        co-designing the HL7 FHIR spec with NHS Scotland. It&apos;s now live across all{' '}
        <span className="n">14</span> health boards and <span className="n">535</span> GP
        practices, retained <span className="n">£2M</span> in at-risk contracts, grew Scotland
        revenue <span className="n">20%</span> and processed <span className="n">13,000+</span>{' '}
        referrals in year one.
      </>,
      <>
        Advice and guidance calls only prove ROI if someone records the outcome, and most
        clinicians don&apos;t have time to leave them. Automated Outcomes transcribes the call and
        records the likely outcome, built on a self-hosted model so no patient data ever leaves
        approved infrastructure. One service went from <span className="n">4%</span> to{' '}
        <span className="n">97%</span> outcome capture, and that number was being used in contract
        renewals within months. Alongside it: GP record integrations routing{' '}
        <span className="n">800+</span> clinical documents a day into EMIS and SystmOne at{' '}
        <span className="n">96%</span> acceptance with zero clinical data loss.
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
    when: 'Jan 2020 to Aug 2021',
    title: 'Product Manager',
    paragraphs: [
      <>
        I owned pricing and billing for broadband products. The project I&apos;m known for started
        in the lift. Staff kept complaining that the billing system produced wrong bills, so I dug
        into it with a data analyst and found a pricing bug on landline and broadband bundles. We
        corrected <span className="n">1,500</span> undercharged accounts and recovered{' '}
        <span className="n">NZ$700K</span> in three months, for NZ$12K of effort. A{' '}
        <span className="n">58x</span> return on listening to lift chatter.
      </>,
      <>
        Also launched Business Wireless Broadband: <span className="n">1,000</span> live
        connections in month one, then roughly <span className="n">25%</span> month-on-month
        growth for six months.
      </>,
    ],
    figures: [{ value: '58×', label: 'return on the recovery work' }],
  },
  {
    company: 'Skinny Mobile',
    location: "Auckland, NZ · Vodafone's prepaid brand",
    when: 'Jan 2018 to Dec 2019',
    title: 'Product & Propositions Manager',
    paragraphs: [
      <>
        Propositions for Vodafone&apos;s prepaid brand, where volumes are high and margins are
        thin, so every promotion had to pay for itself. Free Data Weekends lifted customer spend{' '}
        <span className="n">25%</span> and cut churn <span className="n">10%</span> year on year.
        I also rebuilt the self-service help site: page views up <span className="n">130%</span>,
        load times down <span className="n">60%</span>, and noticeably fewer customers needing a
        human.
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
          <span className="section-head__kick">02: 2016 to 2026</span>
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
