import { Resume } from "./definitions"

export const RESUME: Resume = {
  name: "Kody Deda",
  email: "kodydeda4@gmail.com",
  profession: " iOS Developer",
  description: "Developer with a focus on building great-looking software experiences, application architecture, and all things Swift.",
  srcHero: "/avatar-hero-2.gif",
  srcAvatar: "/avatar.jpeg",
  urlResume: "https://rxresu.me/kodydeda4/kodydeda",
  urlGithub: "https://github.com/kodydeda4",
  urlLinkedIn: "https://www.linkedin.com/in/kodydeda4/",
  urlWebsite: "https://github.com/kodydeda4/nextjs-kodydeda",
  experience: [
    {
      title: "Pocket Radar",
      description: "Speed and Video Analysis",
      caption: "May 2022 - Present",
      srcIcon: "/pocket-radar.png",
      srcHero: "/pocket-radar-hero.png",
      urlAppStore: "https://apps.apple.com/us/app/pocket-radar-sports/id1576214627",
      responsibilities: [
        "Developed and launched new mobile features using SwiftUI & AVFoundation.",
        "Maintained existing Camera, VideoPlayer, Bluetooth, Database features.",
        "Added test coverage for over 40 features using ComposableArchitecture.",
        "Modularized parts of the app using SPM packages.",
        "Simplified asynchronous logic with swift concurrency patterns like AsyncStreams & Async/Await."
      ]
    },
    {
      title: "Dealerware",
      description: "Fleet Management",
      caption: "July 2021 - March 2022",
      srcIcon: "/dealerware.png",
      srcHero: "/dealerware-hero.png",
      urlAppStore: "https://apps.apple.com/us/app/dealerware/id1168703299",
      responsibilities: [
        "Developed and launched new mobile features using UIKit, MVC & Storyboards.",
        "Utilized CI/CD pipelines with GitHub, Fastlane, and CircleCI.",
        "Managed sprint planning and tracking using JIRA and Confluence.",
        "Worked in collaboration with designers, engineers, and product managers.",
        "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and code reviews.",
      ]
    },
  ],
  apps: [
    {
      title: "IDD Camera",
      description: "Photo & Video",
      features: [
        "Single-player puzzle challenge using a triangular board with 15 holes.",
        "Jump pegs over each other to remove them, aiming to leave only one peg.",
        "Modern design for a timeless classic.",
      ],
      srcAppIcon: "/idd-camera.png",
      srcHero: "/idd-camera-hero.png",
      urlAppStore: "https://apps.apple.com/us/app/idd-camera/id6740935223",
      urlGithub: "https://github.com/kodydeda4/swift-camera-app",
      urlLocal: "/idd-camera"
    },
    {
      title: "Peg Puzzle Classic",
      description: "Game",
      features: [
        "Single-player puzzle challenge using a triangular board with 15 holes.",
        "Jump pegs over each other to remove them, aiming to leave only one peg.",
        "Modern design for a timeless classic.",
      ],
      srcAppIcon: "/peg-puzzle-classic.png",
      srcHero: "/peg-puzzle-classic-hero-2.png",
      urlAppStore: "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
      urlGithub: "https://github.com/kodydeda4/swiftui-peg-puzzle-classic",
      urlLocal: "/peg-puzzle-classic"
    },
    {
      title: "Guitar Tuner",
      features: [
        "Multiple tuning options including standard and drop tunings.",
        "Ability to tune different instruments such as guitar or bass.",
        "Clean, easy-to-read user interface with intuitive navigation."
      ],
      description: "Music Education",
      srcAppIcon: "/guitar-tuner.png",
      srcHero: "/guitar-tuner-hero-2.png",
      urlAppStore: "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914",
      urlGithub: "https://github.com/kodydeda4/swiftui-guitar-tuner",
      urlLocal: "/guitar-tuner"
    },
  ],
  technologies: [
    {
      title: "xcode",
      srcIcon: "/xcode.png",
      href: "https://www.google.com"
    },
    {
      title: "swift",
      srcIcon: "/swift-2.png",
      href: "https://www.google.com"
    },
    {
      title: "swift-ui",
      srcIcon: "/swiftui.png",
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
  ],
  education: [
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
}
