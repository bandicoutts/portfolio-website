import Image from 'next/image'

const ledgerRows = [
  {
    what: 'Revenue recovered after fixing a Vodafone NZ billing error',
    context: "three months' work at a cost of NZ$12K",
    value: 'NZ$700,000',
  },
  {
    what: 'Scottish health boards using the digital dermatology service',
    context: 'a nationwide rollout',
    value: '14 / 14',
  },
  {
    what: 'Scottish contracts retained during the rollout',
    context: 'followed by 20% revenue growth over two years',
    value: '£2M',
  },
  {
    what: 'Clinical outcomes recorded on one NHS service',
    context: 'after automated transcription and outcome detection launched',
    value: '4% to 97%',
  },
  {
    what: 'Clinical documents sent to EMIS and SystmOne each day',
    context: 'with a 96% acceptance rate',
    value: '800+',
  },
]

export function Hero() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero__main">
          <h1 className="hero__statement">
            Eight years building digital products across telecoms and health technology, most
            recently AI and clinical integrations for the NHS.
          </h1>
          <div className="text-links">
            <a className="tlink" href="#contact">
              Contact
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
        </aside>
      </section>

      <section className="ledger" id="record" aria-labelledby="record-title">
        <div className="ledger__head">
          <h2 id="record-title">Selected outcomes</h2>
          <span>From health technology and telecoms</span>
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
