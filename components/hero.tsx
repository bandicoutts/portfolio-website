import Image from 'next/image'

function BillingArtifact() {
  return (
    <div className="billing-art" aria-label="Illustrative business service bill showing an included landline that was not charged">
      <div className="bill-paper">
        <div className="bill-topline"><span>ACCOUNT REVIEW</span><span>BUSINESS BUNDLE</span></div>
        <div className="bill-heading">Business service statement</div>
        <div className="bill-ref">Illustrative monthly rates</div>
        <div className="bill-table" role="table" aria-label="Included services compared with charges">
          <div className="bill-row bill-row--head" role="row"><span role="columnheader">Bundle line</span><span role="columnheader">Expected</span><span role="columnheader">Billed</span></div>
          <div className="bill-row" role="row"><span role="cell">Business broadband</span><strong role="cell">NZ$79</strong><strong role="cell">NZ$79</strong></div>
          <div className="bill-row bill-row--flagged" role="row"><span role="cell">Business landline</span><strong role="cell">NZ$20</strong><strong role="cell"><em className="bill-zero">NZ$0</em></strong></div>
          <div className="bill-row bill-row--total" role="row"><strong role="cell">Monthly total</strong><strong role="cell">NZ$99</strong><strong role="cell">NZ$79</strong></div>
        </div>
        <div className="bill-foot">One example from a 1,500-account review</div>
      </div>
      <div className="billing-result" aria-label="Investigation cost NZ$12,000, revenue recovered NZ$700,000 in three months, 58 times return">
        <div><span>Investigation + fix</span><strong>NZ$12K</strong><small>delivery cost</small></div>
        <div className="billing-result__recovered"><span>Revenue recovered</span><strong>NZ$700K</strong><small>within three months</small></div>
        <div className="billing-result__return"><span>Return</span><strong>58×</strong><small>on the work</small></div>
      </div>
    </div>
  )
}

function Introduction() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__main">
        <h1 className="hero__statement">
          Product work<br />
          <span>in the real world.</span>
        </h1>
        <p className="hero__intro">
          Eight years building digital products across telecoms and health technology, most
          recently clinical AI and integrations for the NHS.
        </p>
        <div className="text-links">
          <a className="tlink" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          <a className="tlink tlink--quiet" href="/DavidFlynnCoutts_Resume.pdf" download>Download CV</a>
        </div>
      </div>
      <figure className="hero__portrait">
        <Image src="/7819-0750.jpg" alt="David Flynn-Coutts" width={820} height={547} priority />
      </figure>
    </section>
  )
}

function FeaturedBillingStory() {
  return (
    <section className="billing-feature" aria-labelledby="billing-feature-title">
      <div className="billing-feature__heading">
        <h2 id="billing-feature-title">I found and corrected billing errors across 1,500 accounts.</h2>
        <p className="section-kicker">Billing review <span>·</span> Telecoms</p>
        <p>I worked with BI to spot billing trends, identify incorrectly charged accounts and coordinate proactive calls to correct plans. We balanced accurate pricing with customer experience, using one-off credits where appropriate.</p>
        <a className="case__link" href="#experience">The role and context <span aria-hidden="true">↘</span></a>
      </div>
      <BillingArtifact />
    </section>
  )
}

export function Hero() {
  return (
    <>
      <Introduction />
      <FeaturedBillingStory />
    </>
  )
}
