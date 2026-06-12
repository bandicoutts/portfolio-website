import Image from 'next/image'

const ledgerRows = [
  {
    what: 'Billing leakage recovered',
    context: 'Vodafone NZ, recovered in three months at a cost of NZ$12K',
    value: 'NZ$700,000',
  },
  {
    what: 'NHS Scotland health boards using digital dermatology',
    context: 'nationwide rollout across Scotland',
    value: '14 / 14',
  },
  {
    what: 'NPS among primary care users',
    context: 'over 18 months',
    value: '+4 to +30',
  },
  {
    what: 'Clinical outcome capture for one NHS service',
    context: 'after shipping Automated Outcomes',
    value: '4% to 97%',
  },
  {
    what: 'Clinical documents routed daily into EMIS & SystmOne',
    context: 'at 96% acceptance, zero clinical data loss',
    value: '800+',
  },
]

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main">
          <h1 id="hero-title" aria-label="A product manager for products that have to work.">
            <span className="hline">A product manager</span>{' '}
            <span className="hline">for products that</span>{' '}
            <span className="hline l2">have to work.</span>
          </h1>
          <p className="hero__lead">
            Eight years across NHS health tech and telecoms, most recently leading iOS, Android,
            web, AI and integration products at Consultant Connect. Outside work, I build the
            software I wish existed.
          </p>
          <div className="text-links">
            <a className="tlink" href="#contact">
              Let&apos;s talk
            </a>
            <a className="tlink" href="/DavidFlynnCoutts_Resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <aside className="hero__side" aria-label="Portrait">
          <div className="portrait-frame">
            <Image
              src="/7819-0750.jpg"
              alt="David Flynn-Coutts"
              width={360}
              height={440}
              priority
            />
          </div>
          <p className="caption">
            Senior Product Manager in London. Integrations, AI products and hands-on software
            shipping.
          </p>
        </aside>
      </section>

      <section className="ledger" id="record" aria-labelledby="record-title">
        <div className="ledger__head">
          <span id="record-title">01 — The record</span>
          <span>selected outcomes</span>
        </div>
        {ledgerRows.map(row => (
          <div className="ledger__row" key={row.what}>
            <div className="ledger__what">
              {row.what} <span className="ledger__context">— {row.context}</span>
            </div>
            <div className="ledger__value">{row.value}</div>
          </div>
        ))}
      </section>
    </>
  )
}
