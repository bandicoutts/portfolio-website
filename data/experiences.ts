import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    role: 'Senior Product Manager',
    org: 'Consultant Connect',
    when: 'Aug 2021 — May 2026',
    where: 'London, UK',
    points: [
      ['Led Scotland-wide digital dermatology rollout to all ', '14', ' NHS health boards and ', '535', ' GP practices, processing ', '13,000+', ' referrals in year one.'],
      ['Defined and negotiated ', 'HL7 FHIR', ' API specifications with NHS Scotland, integrating national SSO, EMPI, and image storage platforms to remove onboarding friction and reduce clinical risk.'],
['Diagnosed why primary care users were dissatisfied, built a structured feedback and resolution process across support channels, and confirmed resolution with each user directly. NPS moved from +4 to ', '+30', ' within 18 months.'],
      ['Shipped GP records integration via Docman Connect, routing completed clinical correspondence automatically into EMIS and SystmOne, processing ', '800+', ' documents daily at a ', '96%', ' acceptance rate with zero clinical data loss.'],
    ],
  },
  {
    role: 'Product Manager',
    org: 'Vodafone New Zealand',
    when: 'Jan 2020 — Aug 2021',
    where: 'Auckland, NZ',
    points: [
      ['Found systemic billing revenue leakage, corrected ', '1,500', ' undercharged accounts, recovered ', '$700K', ' in three months at $12K cost: ', '58×', ' return.'],
      ['Launched Business Wireless Broadband to ', '1,000', ' connections in month one, sustaining ', '25%', ' MoM growth for six months.'],
    ],
  },
  {
    role: 'Product & Propositions Manager',
    org: 'Skinny Mobile',
    when: 'Jan 2018 — Dec 2019',
    where: 'Auckland, NZ',
    context: 'Vodafone-owned prepaid MVNO',
    points: [
      ['Designed and ran targeted promotional campaigns (Free Data Weekends), growing customer spend ', '+25%', ' and cutting churn ', '10%', ' YoY.'],
      ['Led self-service help-site rebuild: page views ', '+130%', ' MoM, load times down ', '60%', ', reducing reliance on Level 1 support through better self-service.'],
    ],
  },
  {
    role: 'Technical Escalations Lead · Software Dev & BA intern',
    org: 'Spark New Zealand',
    when: '2016 — 2018',
    where: 'Auckland, NZ',
    context: "NZ's largest telco",
    points: [],
  },
]
