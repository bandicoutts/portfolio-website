import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    title: 'Senior Product Manager',
    company: 'Consultant Connect',
    period: 'August 2021 - Present',
    location: 'London, UK',
    description: [
      'Own core platform and integration products used across NHS primary and secondary care, with accountability for adoption, clinical safety, and revenue retention in a regulated environment',
      'Led the Scotland-wide digital dermatology product, deliberately prioritising national-scale interoperability over incremental feature delivery to retain £2M in at-risk NHS contracts and drive 20% revenue growth over two years. Scaled the active user base from 4,000 to 7,000 clinicians (75% growth in one year)',
      'Defined and negotiated HL7 FHIR API specifications directly with NHS Scotland, integrating with national SSO and EMPI services to remove onboarding friction, reduce clinical risk, and enable system-level identity assurance',
      'Established a closed-loop quality and feedback system across support calls, email, and in-product feedback, shifting the organisation from reactive issue handling to structured problem-solving and improving Primary Care NPS from +4 to +30',
      'Leading a full rebuild of the core application platform to address accumulated technical debt and fragmented workflows. Mapped legacy architecture, integration boundaries, and clinician journeys, then redesigned the system to eliminate duplicate data entry and reduce time-on-task for clinicians',
      'Conceived and delivered eRS Connect, integrating directly with NHS eRS APIs and consolidating multi-screen referral workflows into a single interface. Reduced consultant handling time per referral from six minutes to 1.5 minutes and cut interaction steps from eight to three, enabling consultants to process referrals 2–4× faster',
      'Shipped GP records integrations with EMIS and SystmOne, designing document ingestion and matching logic that now processes 800+ clinical documents per day with a 96% acceptance rate, replacing manual upload and reconciliation workflows',
      'Built and maintained a continuous discovery cadence, including monthly clinician interviews, quarterly advisory boards with NHS commissioners, and biannual NPS surveys, using insights to shape roadmap priorities and de-risk delivery decisions',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Vodafone New Zealand',
    period: 'January 2020 - August 2021',
    location: 'Auckland, New Zealand',
    description: [
      'Owned pricing integrity and billing experience for low-margin broadband products, identifying systemic revenue leakage through data warehouse analysis and customer segmentation',
      'Chose a targeted, high-ROI intervention over a full billing system rebuild, correcting undercharging across 1,500 accounts and recovering $700k in revenue within three months at a delivery cost of $12k (58× ROI)',
      'Designed a repeatable operating model for detecting and resolving billing discrepancies, combining configuration analysis, customer upgrade propensity scoring, and coordinated outreach across sales and operations teams',
      'Launched a new Business Wireless Broadband product, aligning product definition, UX, engineering delivery, and go-to-market execution. Achieved 1,000 live connections in the first month and sustained ~25% month-on-month growth for six consecutive months',
    ],
  },
  {
    title: 'Product & Propositions Manager',
    company: 'Skinny Mobile',
    period: 'January 2018 - December 2019',
    location: 'Auckland, New Zealand',
    description: [
      'Led commercial product propositions for a high-volume consumer mobile brand, balancing promotional experimentation with margin and churn constraints',
      'Designed and delivered targeted promotional campaigns (e.g. Free Data Weekends), increasing customer spend by 25% and reducing churn by 10% year-on-year in Q4 2018 compared with Q4 2017',
      'Owned the redevelopment of the self-service help site, prioritising performance and information architecture improvements that increased page views by 130% month-on-month, reduced load times by 60%, and deflected support demand',
    ],
  },
]
