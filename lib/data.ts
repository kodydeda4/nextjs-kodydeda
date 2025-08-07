import { Resume } from "./definitions";

export const RESUME: Resume = {
  name: "Kody Deda",
  email: "kodydeda4@gmail.com",
  profession: " iOS Developer",
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
        "Developed customer-facing features using SwiftUI and The Composable Architecture",
        "Created architectural diagrams to document unidirectional data flow and feature composition",
        "Built a scalable AWS AppSync GraphQL layer with support for unit testing.",
        "Implemented skeleton loading states to improve perceived performance in information-dense views",
        "Integrated Google Analytics across 40+ production features for usage tracking and product insights",
        "Added support for Apple accessibility features to enhance usability for elderly users",
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
        "Designed and developed an internal SPM package to modularize the company’s production iOS app and improve long-term maintainability",
        "Introduced feature-based modules to enforce separation of concerns and dependency boundaries",
        "Built a scalable REST API layer with dev/prod environment support and structured logging",
        "Developed a centralized permissions manager for camera, microphone, bluetooth, and photo library access",
        "Implemented an SQLite database using GRDB with support for SwiftUI previews and unit testing",
        "Extracted a Design System module with reusable SwiftUI components, typography, and button styles",
        "Created a standalone camera module for capturing and exporting video using AVFoundation and PhotoKit",
        "Implemented a custom video player with modular overlay controls, integrated cleanly across the app",
        "Rewrote core business logic using Swift Concurrency to replace Combine and improve clarity",
        "Integrated an async-compatible Text-to-Speech utility for voice feedback throughout the app",
        "Migrated over 40 production features to The Composable Architecture (TCA) with full test coverage across reducers and side effects",
      ],
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
        "Collaborated with designers, backend engineers, and product managers to build user-facing features",
        "Utilized CI/CD pipelines with GitHub, Fastlane, and CircleCI to automate builds and streamline delivery",
        "Actively participated in Agile development: sprint planning, daily standups, retrospectives, and code reviews",
        "Managed sprint tracking and documentation using JIRA and Confluence to ensure team alignment and project visibility",
        "Helped onboard new developers and contributed to knowledge-sharing sessions and code reviews to maintain a healthy engineering culture",
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
