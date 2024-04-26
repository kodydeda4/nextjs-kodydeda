export type ProfessionalExperienceCardProps = {
  title: string
  description: string
  appIconSrc: string
  heroSrc: string
  appStoreURL: string
  responsibilities: string
}

export type AppCardProps = {
  title: string
  description: string
  appIconSrc: string
  heroSrc: string
  appStoreURL: string
  githubURL: string
}

export type TechnologyCardProps = {
  title: string
  iconSrc: string
  href: string
}

export type EducationCardProps = {
  title: string
  description: string
  caption: string
  iconSrc: string
  href: string
}

export const experience: ProfessionalExperienceCardProps[] = [
  {
    title: "Pocket Radar",
    description: "Speed and Video Analysis",
    appIconSrc: "/pocket-radar.png",
    heroSrc: "/pocket-radar-hero.png",
    appStoreURL: "https://apps.apple.com/us/app/pocket-radar-sports/id1576214627",
    responsibilities: "Learned how to write a for-each loop in Python.",
  },
  {
    title: "Dealerware",
    description: "Fleet Management",
    appIconSrc: "/dealerware.png",
    heroSrc: "/dealerware-hero.png",
    appStoreURL: "https://apps.apple.com/us/app/dealerware/id1168703299",
    responsibilities: "Learned how to write a for-each loop in Python.",
  },
]

export const apps: AppCardProps[] = [
  {
    title: "Peg Puzzle Classic",
    description: "Game",
    appIconSrc: "/peg-puzzle-classic.png",
    heroSrc: "/peg-puzzle-classic-hero-2.png",
    appStoreURL: "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
    githubURL: "https://github.com/kodydeda4/PegPuzzleClassic",
  },
  {
    title: "Guitar Tuner",
    description: "Music Education",
    appIconSrc: "/guitar-tuner.png",
    heroSrc: "/guitar-tuner-hero-2.png",
    appStoreURL: "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914",
    githubURL: "https://github.com/kodydeda4/GuitarTuner",
  },
]

export const technologies: TechnologyCardProps[] = [
  {
    title: "xcode",
    iconSrc: "/xcode.png",
    href: "https://www.google.com"
  },
  {
    title: "swift",
    iconSrc: "/swift.png",
    href: "https://www.google.com"
  },
  {
    title: "composable-architecture",
    iconSrc: "/pointfree.png",
    href: "https://www.google.com"
  },
  {
    title: "github",
    iconSrc: "/github.png",
    href: "https://www.google.com"
  },
  {
    title: "slack",
    iconSrc: "/slack.png",
    href: "https://www.google.com"
  },
  {
    title: "jira",
    iconSrc: "/jira.png",
    href: "https://www.google.com"
  },
  {
    title: "figma",
    iconSrc: "/figma.png",
    href: "https://www.google.com"
  },
]

export const education: EducationCardProps[] = [
  {
    title: "Bachelor's of Computer Science",
    description: "University of North Carolina Wilmington",
    caption: "Spring 2019 - Fall 2022",
    iconSrc: "/uncw.png",
    href: "https://uncw.edu/",
  },
  {
    title: "Associate's of Science",
    description: "Cape Fear Community College",
    caption: "Spring 2016 - Fall 2018",
    iconSrc: "/cfcc.png",
    href: "https://cfcc.edu/",
  },
]

