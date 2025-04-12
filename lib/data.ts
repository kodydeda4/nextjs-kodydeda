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
        "Designed and developed an internal Swift Package Manager (SPM) package to modularize the company’s production iOS app and improve long-term maintainability",
        "Introduced feature-based modules to enforce separation of concerns and define clearer dependency boundaries",
        "Built a scalable REST API layer with dev/prod environment support, structured logging, and custom error handling",
        "Developed a centralized permissions manager for camera, microphone, bluetooth, and photo library access",
        "Implemented a performant and testable SQLite persistence layer using GRDB, designed to support feature isolation and provide mock data for SwiftUI previews",
        "Extracted a shared Design System module with reusable SwiftUI components, consistent typography, and button styles",
        "Created a standalone camera module for capturing and exporting video using AVFoundation and PhotoKit",
        "Implemented a custom video player with modular overlay controls, integrated cleanly across the app",
        "Translated core business logic from Combine to async/await for improved readability and modern concurrency",
        "Integrated an async-compatible Text-to-Speech utility for non-blocking voice feedback throughout the app",
        "Migrated over 40 production features to The Composable Architecture (TCA) with full test coverage across reducers and side effects"
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
        "Developed and launched production mobile features using UIKit, MVC, and Storyboards, contributing to a mobility platform used by major automotive brands",
        "Collaborated closely with designers, backend engineers, and product managers to implement smooth UI and API integrations",
        "Utilized CI/CD pipelines with GitHub, Fastlane, and CircleCI to automate builds and streamline delivery",
        "Actively participated in Agile development: sprint planning, daily standups, retrospectives, and code reviews",
        "Managed sprint tracking and documentation using JIRA and Confluence to ensure team alignment and project visibility",
        "Helped onboard new developers and contributed to knowledge-sharing sessions and code reviews to maintain a healthy engineering culture"
      ]
    },
  ],
  apps: [
    // {
    //   title: "IDD Camera",
    //   description: "Photo & Video",
    //   features: [
    //     "Single-player puzzle challenge using a triangular board with 15 holes.",
    //     "Jump pegs over each other to remove them, aiming to leave only one peg.",
    //     "Modern design for a timeless classic.",
    //   ],
    //   srcAppIcon: "/idd-camera.png",
    //   srcHero: "/idd-camera-hero.png",
    //   urlAppStore: "https://apps.apple.com/us/app/idd-camera/id6740935223",
    //   urlGithub: "https://github.com/kodydeda4/swift-camera-app",
    //   urlLocal: "/idd-camera"
    // },
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
      srcIcon: "/uncw-logo-software.png",
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
