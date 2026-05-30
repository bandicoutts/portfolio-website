import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    role: 'Senior Product Manager',
    org: 'Consultant Connect',
    when: 'Aug 2021 — Present',
    where: 'London, UK',
    current: true,
    points: [
      ['Led a Scotland-wide digital dermatology product, scaling active users from ', '4,000', ' to ', '7,000', ' clinicians while retaining ', '£2M', ' in at-risk NHS contracts.'],
      ['Shipped the eRS Connect integration, cutting consultant handling time per referral from ', '6 min', ' to ', '1.5 min', ' by consolidating multi-screen workflows into one interface.'],
      ['Built a closed-loop feedback system across support channels, lifting Primary Care NPS from +4 to ', '+30', '.'],
      ['Leading core platform rebuild to eliminate technical debt and fragmented workflows.'],
    ],
  },
  {
    role: 'Product Manager',
    org: 'Vodafone New Zealand',
    when: 'Jan 2020 — Aug 2021',
    where: 'Auckland, NZ',
    points: [
      ['Found systemic billing revenue leakage, corrected ', '1,500', ' undercharged accounts, recovered ', '$700K', ' in three months at $12K cost — a ', '58×', ' return.'],
      ['Launched Business Wireless Broadband to ', '1,000', ' connections in month one, sustaining ', '25%', ' MoM growth for six months.'],
    ],
  },
  {
    role: 'Product & Propositions Manager',
    org: 'Skinny Mobile',
    when: 'Jan 2018 — Dec 2019',
    where: 'Auckland, NZ',
    points: [
      ['Ran targeted promotions (Free Data Weekends), growing customer spend ', '+25%', ' and cutting churn ', '10%', ' YoY.'],
      ['Led self-service help-site rebuild — page views ', '+130%', ' MoM, load times down ', '60%', ', deflecting support demand.'],
    ],
  },
]
