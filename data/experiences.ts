import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    title: 'Senior Product Manager',
    company: 'Consultant Connect',
    period: 'August 2021 - Present',
    location: 'London, UK',
    metrics: [
      { label: 'Clinician Growth', value: '+75%' },
      { label: 'Revenue Retention', value: '£2M' },
      { label: 'NPS Improvement', value: '+26 pts' },
    ],
    description: [
      'Led Scotland-wide digital dermatology product, scaling active users from 4,000 to 7,000 clinicians while retaining £2M in at-risk NHS contracts and driving 20% revenue growth',
      'Shipped eRS Connect integration, reducing consultant handling time per referral from 6 minutes to 1.5 minutes by consolidating multi-screen workflows into a single interface',
      'Established closed-loop feedback system across support channels, shifting from reactive handling to structured problem-solving and improving Primary Care NPS from +4 to +30',
      'Leading core platform rebuild to eliminate technical debt, duplicate data entry, and fragmented workflows affecting clinician time-on-task',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Vodafone New Zealand',
    period: 'January 2020 - August 2021',
    location: 'Auckland, New Zealand',
    metrics: [
      { label: 'Revenue Recovery', value: '$700K' },
      { label: 'ROI', value: '58×' },
      { label: 'Connections (Month 1)', value: '1,000' },
    ],
    description: [
      'Identified systemic billing revenue leakage through data analysis, correcting 1,500 undercharged accounts and recovering $700k within three months at $12k delivery cost (58× ROI)',
      'Launched Business Wireless Broadband product, achieving 1,000 connections in first month with sustained 25% month-on-month growth for six months',
      'Designed repeatable billing integrity process combining configuration analysis, propensity scoring, and coordinated outreach',
    ],
  },
  {
    title: 'Product & Propositions Manager',
    company: 'Skinny Mobile',
    period: 'January 2018 - December 2019',
    location: 'Auckland, New Zealand',
    metrics: [
      { label: 'Customer Spend', value: '+25%' },
      { label: 'Churn Reduction', value: '-10%' },
      { label: 'Help Site Performance', value: '+130%' },
    ],
    description: [
      'Designed targeted promotional campaigns (Free Data Weekends), increasing customer spend by 25% and reducing churn by 10% YoY in Q4 2018',
      'Led self-service help site redevelopment, increasing page views by 130% MoM and reducing load times by 60% while deflecting support demand',
    ],
  },
]
