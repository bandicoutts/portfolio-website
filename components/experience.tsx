const roles = [
  {
    company: 'Consultant Connect',
    location: 'London, UK',
    when: 'Aug 2021 — May 2026',
    title: 'Senior Product Manager',
    paragraphs: [
      <>
        Owned platform and integration products used across NHS primary and secondary care,
        covering AI product development, clinical safety, adoption and revenue retention.
      </>,
      <>
        Led the Scotland-wide digital dermatology expansion to all <span className="n">14</span>{' '}
        NHS health boards and <span className="n">535</span> GP practices. Retained{' '}
        <span className="n">£2M</span> in at-risk contracts, grew Scotland revenue{' '}
        <span className="n">20%</span> over two years and processed{' '}
        <span className="n">13,000+</span> referrals in the first year.
      </>,
      <>
        Negotiated HL7 FHIR API specifications directly with NHS Scotland, integrating national
        SSO, patient demographics (EMPI) and national image storage (NDP).
      </>,
      <>
        Shipped Automated Outcomes, which uses AWS Medical Transcribe and a hosted LLM to capture
        clinical outcomes from call transcripts. Owned clinical risk governance end to end. One
        service went from <span className="n">4%</span> to <span className="n">97%</span> outcome
        capture.
      </>,
      <>
        Shipped GP records integration into EMIS and SystmOne:{' '}
        <span className="n">800+</span> clinical documents a day,{' '}
        <span className="n">96%</span> automated acceptance, zero clinical data loss.
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
        Found systemic billing leakage through data analysis, corrected{' '}
        <span className="n">1,500</span> undercharged accounts and recovered{' '}
        <span className="n">NZ$700K</span> in three months at a cost of NZ$12K. A targeted fix,
        chosen over a full billing system rebuild. Launched Business Wireless Broadband:{' '}
        <span className="n">1,000</span> live connections in the first month, then roughly{' '}
        <span className="n">25%</span> month-on-month growth for six months.
      </>,
    ],
    figures: [{ value: '58x', label: 'return on the recovery work' }],
  },
  {
    company: 'Skinny Mobile',
    location: "Auckland, NZ · Vodafone's prepaid brand",
    when: 'Jan 2018 — Dec 2019',
    title: 'Product & Propositions Manager',
    paragraphs: [
      <>
        Ran targeted promotions such as Free Data Weekends: customer spend up{' '}
        <span className="n">25%</span>, churn down <span className="n">10%</span> year on year.
        Rebuilt the self-service help site: page views up <span className="n">130%</span>, load
        times down <span className="n">60%</span>, fewer contacts reaching Level 1 support.
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
