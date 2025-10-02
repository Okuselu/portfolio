export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  featured?: boolean
  category?: string
}

export interface Experience {
  id: number
  company: string
  position: string
  duration: string
  description: string
  technologies?: string[]
  location?: string
}

export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Other'
}

export interface ContactForm {
  name: string
  email: string
  subject?: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}