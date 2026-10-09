const roles = [
  {
    company: 'Consultant Connect',
    location: 'London, UK',
    when: 'Aug 2021 to May 2026',
    title: 'Senior Product Manager',
    paragraphs: [
      <>
        I led a team of six engineers and two product managers across Consultant Connect&apos;s web and
        mobile products. My work included digital dermatology in Scotland, Automated Outcomes and
        integrations with GP records.
      </>,
    ],
  },
  {
    company: 'Vodafone New Zealand',
    location: 'Auckland, NZ',
    when: 'Jan 2020 to Aug 2021',
    title: 'Product Manager',
    paragraphs: [
      <>
        I owned Vodafone NZ&apos;s business broadband products, working on billing issues and
        launching Business Wireless Broadband.
      </>,
    ],
  },
  {
    company: 'Skinny Mobile',
    location: 'Auckland, NZ, a Spark venture',
    when: 'Jan 2018 to Dec 2019',
    title: 'Product & Propositions Manager',
    paragraphs: [
      <>
        I moved from customer care into product, working on promotions and Skinny&apos;s website, app
        and help site. Campaigns grew customer spend, while a faster help site made it easier to
        self-serve.
      </>,
    ],
  },
]

export function Experience() {
  return (
    <>
      <section className="block" id="experience" aria-labelledby="experience-title">
        <div className="section-head">
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
          </article>
        ))}
      </section>
      <section className="block education" aria-labelledby="education-title">
        <div className="section-head">
          <h2 id="education-title">Education</h2>
        </div>
        <article className="role">
          <div className="role__meta">
            <div className="role__company">University of Auckland</div>
            <div>2018</div>
          </div>
          <div className="role__body education__body">
            <h3>BSc Computer Science</h3>
          </div>
        </article>
      </section>
    </>
  )
}
