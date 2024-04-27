export type Experience = {
  title: string
  description: string
  caption: string
  srcIcon: string
  srcHero: string
  urlAppStore: string
  responsibilities: string[]
}

export type App = {
  title: string
  description: string
  features: string[]
  srcAppIcon: string
  srcHero: string
  urlAppStore: string
  urlGithub: string
  urlLocal: string
}

export type Technology = {
  title: string
  srcIcon: string
  href: string
}

export type Education = {
  title: string
  description: string
  caption: string
  srcIcon: string
  href: string
}

export type Resume = {
  name: string
  email: string
  urlResume: string
  urlGithub: string
  urlLinkedIn: string
  urlWebsite: string
  experience: Experience[]
  apps: App[]
  technologies: Technology[]
  education: Education[]
}
