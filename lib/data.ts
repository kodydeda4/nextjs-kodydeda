import { Resume } from "./definitions";

export const RESUME: Resume = {
  name: "Kody Deda",
  email: "kodydeda4@gmail.com",
  profession: " Senior iOS Developer",
  description:
    "Developer with a focus on building great-looking software experiences, application architecture, and all things Swift.",
  srcHero: "/avatar-hero-2.gif",
  srcAvatar: "/avatar.jpeg",
  urlResume: "https://rxresu.me/kodydeda4/kody-deda-resume",
  urlGithub: "https://github.com/kodydeda4",
  urlLinkedIn: "https://www.linkedin.com/in/kodydeda4/",
  urlWebsite: "https://github.com/kodydeda4/nextjs-kodydeda",
  experience: [
    {
      title: "Foresight Cares",
      description: "AI-Powered Health Assessments",
      caption: "May 2025 - Present",
      srcIcon: "/fsc.jpeg",
      srcHero: "/pocket-radar-hero.png",
      urlAppStore: "https://www.google.com",
      responsibilities: [
        "Built polished, user-facing features for an ai powered iPad healthcare app using SwiftUI, UIKit, and TCA.",
        "Created a testable AWS Amplify layer for GraphQL queries using dependency injection patterns.",
        "Implemented in-app subscriptions using Apple StoreKit with onboarding, paywall, and upgrade pages.",
        "Created a reusable design system optimized for older adults with larger typography.",
        "Collaborated on iOS product roadmaps, helping define features, scope, and technical direction.",
        "Brought best practices like unit testing, dependency injection, and unidirectional data-flow to the app.",
      ],
    },
    {
      title: "Pocket Radar",
      description: "Speed and Video Analysis",
      caption: "May 2022 - Apr 2025",
      srcIcon: "/pocket-radar.png",
      srcHero: "/pocket-radar-hero.png",
      urlAppStore:
        "https://apps.apple.com/us/app/pocket-radar-sports/id1576214627",
      responsibilities: [
        "Developed user-facing features for a baseball sports iPhone app using SwiftUI, UIKit and MVVM.",
        "Built a scalable REST API layer with support for multiple environments to manage player data in the app.",
        "Implemented a local SQLite database using GRDB, with support for SwiftUI previews and unit testing.",
        "Created an internal SPM package for camera and video playback features to improve code maintainability.",
        "Wrote a centralized permissions manager for camera, microphone, bluetooth, and photo library access.",
      ],
    },
    {
      title: "Dealerware",
      description: "Fleet Management",
      caption: "November 2020 - March 2022", //"July 2021 - March 2022", <- real dates lol
      srcIcon: "/dealerware.png",
      srcHero: "/dealerware-hero.png",
      urlAppStore: "https://apps.apple.com/us/app/dealerware/id1168703299",
      responsibilities: [
        "Developed user-facing features for an automotive iPhone app using UIKit and MVC.",
        "Helped write bug fixes and analyze crash reports as well as diagnose issues in the app.",
        "Actively participated in Agile development: sprint planning, daily standups, retrospectives, and code reviews.",
        "Managed sprint tracking and documentation using JIRA, Confluence, Slack, Github and other tools.",
        "Utilized CI/CD pipelines with GitHub, Fastlane, and CircleCI to automate builds and streamline delivery.",
      ],
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


    // Deda Habit Tracker
    // https://apps.apple.com/us/app/deda-habit-tracker/id6758132419
    //
    // Offline FM
    // https://apps.apple.com/us/app/offline-fm/id6753773356

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
      urlAppStore:
        "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
      urlGithub: "https://github.com/kodydeda4/swiftui-peg-puzzle-classic",
      urlLocal: "/peg-puzzle-classic",
    },
    {
      title: "Guitar Tuner",
      features: [
        "Multiple tuning options including standard and drop tunings.",
        "Ability to tune different instruments such as guitar or bass.",
        "Clean, easy-to-read user interface with intuitive navigation.",
      ],
      description: "Music Education",
      srcAppIcon: "/guitar-tuner.png",
      srcHero: "/guitar-tuner-hero-2.png",
      urlAppStore:
        "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914",
      urlGithub: "https://github.com/kodydeda4/swiftui-guitar-tuner",
      urlLocal: "/guitar-tuner",
    },
  ],
  technologies: [
    {
      title: "xcode",
      srcIcon: "/xcode.png",
      href: "https://www.google.com",
    },
    {
      title: "swift",
      srcIcon: "/swift-2.png",
      href: "https://www.google.com",
    },
    {
      title: "swift-ui",
      srcIcon: "/swiftui.png",
      href: "https://www.google.com",
    },
    {
      title: "composable-architecture",
      srcIcon: "/pointfree.png",
      href: "https://www.google.com",
    },
    {
      title: "github",
      srcIcon: "/github.png",
      href: "https://www.google.com",
    },
    {
      title: "slack",
      srcIcon: "/slack.png",
      href: "https://www.google.com",
    },
    {
      title: "jira",
      srcIcon: "/jira.png",
      href: "https://www.google.com",
    },
    {
      title: "figma",
      srcIcon: "/figma.png",
      href: "https://www.google.com",
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
  ],
};
