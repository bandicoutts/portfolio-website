/** Each point is an alternating array: even indices = plain text, odd indices = inline figures */
export type ExperiencePoint = string[]

export interface Experience {
  role: string
  org: string
  when: string
  where: string
  context?: string
  current?: boolean
  points: ExperiencePoint[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  description?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  content: string
}
