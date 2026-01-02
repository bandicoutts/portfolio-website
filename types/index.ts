export interface Experience {
  title: string
  company: string
  period: string
  location: string
  metrics?: { label: string; value: string }[]
  description: string[]
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
