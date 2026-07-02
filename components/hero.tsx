import Image from 'next/image'

const ledgerRows = [
  {
    what: 'Recovered from a billing bug I found at Vodafone NZ.',
    context: "Three months' work at a cost of NZ$12K",
    value: 'NZ$700,000',
  },
  {
    what: 'NHS Scotland health boards using digital dermatology,',
    context: 'nationwide rollout across Scotland',
    value: '14 / 14',
  },
  {
    what: 'NPS among primary care users,',
    context: 'over 18 months',
    value: '+4 to +30',
  },
  {
    what: 'Outcome capture on one NHS service',
    context: 'the week Automated Outcomes switched on',
    value: '4% to 97%',
  },
  {
    what: 'Clinical documents routed daily into EMIS & SystmOne,',
    context: 'at 96% acceptance, zero clinical data loss',
    value: '800+',
  },
]

export function Hero() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero__main">
          <p className="hero__lead">
            Eight years as a PM across NHS health tech and telecoms: AI in clinically regulated
            settings, the NHS integrations most vendors avoid, and products that kept patients out
            of hospital. Outside work I build software for problems I run into myself.
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
            Senior Product Manager in London. NHS integrations, regulated AI, and a habit of
            shipping things myself.
          </p>
        </aside>
      </section>

      <section className="ledger" id="record" aria-labelledby="record-title">
        <div className="ledger__head">
          <span id="record-title">01: The record</span>
          <span>selected outcomes</span>
        </div>
        {ledgerRows.map(row => (
          <div className="ledger__row" key={row.what}>
            <div className="ledger__what">
              {row.what} <span className="ledger__context">{row.context}</span>
            </div>
            <div className="ledger__value">{row.value}</div>
          </div>
        ))}
      </section>
    </>
  )
}
