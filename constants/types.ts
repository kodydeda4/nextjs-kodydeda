export type Experience = {
  title: string
  description: string
  srcIcon: string
  srcHero: string
  urlAppStore: string
  responsibilities: string
}

export type App = {
  title: string
  description: string
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
  experience: Experience[]
  apps: App[]
  technologies: Technology[]
  education: Education[] 
  urlGithub: string
  urlLinkedIn: string
  urlWebsite: string
  urlResume: string
}

export const experience: Experience[] = [
  {
    title: "Pocket Radar",
    description: "Speed and Video Analysis",
    srcIcon: "/pocket-radar.png",
    srcHero: "/pocket-radar-hero.png",
    urlAppStore: "https://apps.apple.com/us/app/pocket-radar-sports/id1576214627",
    responsibilities: "Learned how to write a for-each loop in Python.",
  },
  {
    title: "Dealerware",
    description: "Fleet Management",
    srcIcon: "/dealerware.png",
    srcHero: "/dealerware-hero.png",
    urlAppStore: "https://apps.apple.com/us/app/dealerware/id1168703299",
    responsibilities: "Learned how to write a for-each loop in Python.",
  },
]

export const apps: App[] = [
  {
    title: "Peg Puzzle Classic",
    description: "Game",
    srcAppIcon: "/peg-puzzle-classic.png",
    srcHero: "/peg-puzzle-classic-hero-2.png",
    urlAppStore: "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
    urlGithub: "https://github.com/kodydeda4/PegPuzzleClassic",
    urlLocal: "/peg-puzzle-classic"
  },
  {
    title: "Guitar Tuner",
    description: "Music Education",
    srcAppIcon: "/guitar-tuner.png",
    srcHero: "/guitar-tuner-hero-2.png",
    urlAppStore: "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914",
    urlGithub: "https://github.com/kodydeda4/GuitarTuner",
    urlLocal: "/guitar-tuner"
  },
]

export const technologies: Technology[] = [
  {
    title: "xcode",
    srcIcon: "/xcode.png",
    href: "https://www.google.com"
  },
  {
    title: "swift",
    srcIcon: "/swift.png",
    href: "https://www.google.com"
  },
  {
    title: "composable-architecture",
    srcIcon: "/pointfree.png",
    href: "https://www.google.com"
  },
  {
    title: "github",
    srcIcon: "/github.png",
    href: "https://www.google.com"
  },
  {
    title: "slack",
    srcIcon: "/slack.png",
    href: "https://www.google.com"
  },
  {
    title: "jira",
    srcIcon: "/jira.png",
    href: "https://www.google.com"
  },
  {
    title: "figma",
    srcIcon: "/figma.png",
    href: "https://www.google.com"
  },
]

export const education: Education[] = [
  {
    title: "Bachelor's of Computer Science",
    description: "University of North Carolina Wilmington",
    caption: "Spring 2019 - Fall 2022",
    srcIcon: "/uncw.png",
    href: "https://uncw.edu/",
  },
  {
    title: "Associate's of Science",
    description: "Cape Fear Community College",
    caption: "Spring 2016 - Fall 2018",
    srcIcon: "/cfcc.png",
    href: "https://cfcc.edu/",
  },
]

export const RESUME: Resume = {
  name: "Kody Deda",
  experience: experience,
  apps: apps,
  technologies: technologies,
  education: education,
  urlGithub: "https://github.com/kodydeda4",
  urlLinkedIn: "https://www.linkedin.com/in/kodydeda4/",
  urlWebsite: "https://github.com/kodydeda4/nextjs-kodydeda",
  urlResume: "/resume.pdf"
}