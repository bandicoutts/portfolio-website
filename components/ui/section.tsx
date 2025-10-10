import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}
