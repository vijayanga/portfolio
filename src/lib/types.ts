export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "database" | "tools" | "other"
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NavItem {
  name: string
  href: string
}
