function ClinicalFlow() {
  return (
    <div className="clinical-art" role="img" aria-label="Illustrative workflow showing a specialist advice call transcribed, an AI-suggested outcome, and the outcome recorded">
      <div className="clinical-flow">
        <div className="clinical-art__call">
          <div className="artifact-label">CALL AUDIO <span>01</span></div>
          <div className="waveform" aria-hidden="true">
            {[14, 25, 18, 36, 22, 44, 29, 17, 38, 26, 48, 20, 33, 15, 41, 23, 34, 18, 43, 27, 12, 32, 21].map((height, index) => (
              <i key={index} style={{ height }} />
            ))}
          </div>
          <span className="artifact-caption">Specialist advice call</span>
        </div>
        <svg className="clinical-art__arrow" viewBox="0 0 90 26" fill="none" aria-hidden="true">
          <path d="M2 13h77m0 0L69 4m10 9-10 9" />
        </svg>
        <div className="clinical-art__transcript">
          <div className="artifact-label">TRANSCRIPT <span>02</span></div>
          <div className="transcript-lines" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </div>
        </div>
        <svg className="clinical-art__arrow clinical-art__arrow--second" viewBox="0 0 90 26" fill="none" aria-hidden="true">
          <path d="M2 13h77m0 0L69 4m10 9-10 9" />
        </svg>
        <div className="clinical-art__ai">
          <div className="artifact-label">AI SUGGESTION <span>03</span></div>
          <div className="ai-suggestion">Suggested outcome <b /></div>
        </div>
        <svg className="clinical-art__arrow clinical-art__arrow--third" viewBox="0 0 90 26" fill="none" aria-hidden="true">
          <path d="M2 13h77m0 0L69 4m10 9-10 9" />
        </svg>
        <div className="clinical-art__record">
          <div className="artifact-label">RECORDED <span>04</span></div>
          <div className="record-glyph" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="artifact-caption">Recorded on the service</span>
        </div>
      </div>
    </div>
  )
}

function ClinicalDocumentFlow() {
  return (
    <div className="clinical-doc-art" role="img" aria-label="Illustrative completed clinical correspondence flowing into EMIS and SystmOne GP records">
      <div className="clinical-doc-art__paper">
        <div className="artifact-label">COMPLETED CORRESPONDENCE <span>GP COPY</span></div>
        <div className="clinical-doc-art__lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="clinical-doc-art__stamp">READY TO FILE <b>✓</b></div>
      </div>
      <svg className="clinical-doc-art__arrow" viewBox="0 0 90 26" fill="none" aria-hidden="true"><path d="M2 13h77m0 0L69 4m10 9-10 9" /></svg>
      <div className="clinical-doc-art__systems">
        <span>GP records</span>
        <b>EMIS</b>
        <b>SystmOne</b>
      </div>
    </div>
  )
}

function ScotlandRollout() {
  return (
    <div className="scotland-art" role="img" aria-label="Map of Great Britain and Ireland, with Scotland highlighted">
      <img className="scotland-map" src="/scotland-locator.svg" alt="" />
    </div>
  )
}

export function CaseNotes() {
  return (
    <section className="case-notes" id="record" aria-label="Selected health technology work">
      <article className="case case--clinical" aria-labelledby="clinical-title">
        <div className="case__copy">
          <h3 id="clinical-title">Automated Outcomes</h3>
          <p className="case__eyebrow">Clinical AI <span>·</span> Outcome recording</p>
          <p>I led the launch. It transcribed specialist advice calls and sent the transcripts to an internal AI tool that suggested an outcome. The resulting data gave commissioners evidence of the service’s value and helped support multiple contract renewals.</p>
          <a className="case__link" href="#experience">The role and context <span aria-hidden="true">↘</span></a>
        </div>
        <aside className="clinical-outcome" aria-label="Recorded outcomes rose from 4 per cent to 97 per cent on one service">
          <span>Outcomes recorded</span>
          <strong>4% <em>→</em> 97%</strong>
          <small>on one service</small>
        </aside>
        <ClinicalFlow />
      </article>

      <article className="case case--integration" aria-labelledby="integration-title">
        <div className="case__copy">
          <h3 id="integration-title">Clinical letters, straight into GP records</h3>
          <p className="case__eyebrow">Clinical integration <span>·</span> GP records</p>
          <p>I led the Docman Connect integration that automatically routed completed clinical correspondence into EMIS and SystmOne.</p>
          <a className="case__link" href="#experience">The role and context <span aria-hidden="true">↘</span></a>
        </div>
        <aside className="integration-results" aria-label="More than 800 documents sent each day, 96 per cent accepted">
          <div className="integration-results__volume"><span>Documents sent</span><strong>800+</strong><small>each day</small></div>
          <div className="integration-results__accepted"><span>Accepted</span><strong>96%</strong></div>
        </aside>
        <ClinicalDocumentFlow />
      </article>

      <article className="case case--scotland" aria-labelledby="scotland-title-heading">
        <div className="case__copy">
          <h3 id="scotland-title-heading">Photo-based dermatology across Scotland</h3>
          <p className="case__eyebrow">Digital dermatology <span>·</span> Scotland</p>
          <p>I led the rollout, connecting the service to national login and patient-matching systems.</p>
          <a className="case__link" href="#experience">The role and context <span aria-hidden="true">↘</span></a>
        </div>
        <aside className="scotland-results integration-results" aria-label="All 14 health boards, 2 million pounds in at-risk contracts retained, and Scottish revenue growth of 20 per cent over two years">
          <div className="integration-results__volume"><span>Health boards</span><strong>14 / 14</strong></div>
          <div className="integration-results__accepted"><span>At-risk contracts retained</span><strong>£2M</strong></div>
          <div className="scotland-results__growth"><span>Revenue growth</span><strong>20%</strong><small>over two years</small></div>
        </aside>
        <ScotlandRollout />
      </article>
    </section>
  )
}
