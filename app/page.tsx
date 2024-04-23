import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { FaGithub as Github } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

const experience: ProfessionalExperienceCardProps[] = [
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

const apps: PersonalProjectCardProps[] = [
  {
    title: "Peg Puzzle Classic",
    description: "Game",
    appIconSrc: "/peg-puzzle-classic.png",
    heroSrc: "/peg-puzzle-classic-hero-2.png",
    appStoreURL: "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914",
    githubURL: "https://github.com/kodydeda4/PegPuzzleClassic",
  },
  {
    title: "Guitar Tuner",
    description: "Music Education",
    appIconSrc: "/guitar-tuner.png",
    heroSrc: "/guitar-tuner-hero-2.png",
    appStoreURL: "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
    githubURL: "https://github.com/kodydeda4/GuitarTuner",
  },
]

const technologies: TechnologyCardProps[] = [
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

const education: EducationCardProps[] = [
  {
    title: "Bachelor's of Computer Science",
    description: "University of North Carolina Wilmington",
    caption: "Spring 2019 - Fall 2022",
    iconSrc: "/uncw.png"
  },
  {
    title: "Associate's of Science",
    description: "Cape Fear Community College",
    caption: "Spring 2016 - Fall 2018",
    iconSrc: "/cfcc.png"
  },
]

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-8 my-8 pt-4 mb-24 px-4">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
              <Image
                src="/avatar-hero.png"
                alt="Hero image."
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Header />
          </div>

          <div>
            <SectionHeader
              caption="Professional Experience"
              title="📖 3 Years of Professional Experience"
              description="I've worked on a few apps in my day. Feel free to take a look!"
            />
            <div className="flex flex-col gap-4 w-full">
              {experience.map((value, index) => (
                <ProfessionalExperienceCard key={index} {...value} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              caption="Personal Projects"
              title="🛠️ Apps I've Made"
              description="I've worked on a few apps in my day. Feel free to take a look!"
            />
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {apps.map((value, index) => (
                <PersonalProjectCard key={index} {...value} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              caption="Technology"
              title="🌎 Technologies & Frameworks"
              description="These are some of my favorite tools."
            />
            <div className="flex flex-wrap gap-4 w-full">
              {technologies.map((value, index) => (
                <TechnologyCard key={index} {...value} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              caption="Education"
              title="🎓 University Education"
              description="These are some of my favorite tools."
            />
            <div className="flex flex-row gap-4 w-full">
              {education.map((value, index) => (
                <EducationCard key={index} {...value} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </main>
  );
}

const Header: React.FC = () => (
  <div className="flex flex-col">
    <h1 className="text-3xl font-extrabold">
      {"Hi, I'm Kody Deda."}
    </h1>
    <h2 className="text-3xl font-extrabold pb-2">
      Welcome to my portfolio!
    </h2>
    <p className="text-xl text-muted-foreground pb-4">
      {"This is a description of my software development skills and stuff, especially related to SwiftUI."}
    </p>
    <div className="flex gap-4">
      <Button className="w-full">Contact Me</Button>
      <Button variant="outline" className="w-full">Resume PDF</Button>
    </div>
  </div>
);

const SectionHeader: React.FC<{ caption: string; title: string; description: string }> = ({ caption, title, description }) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <p className="text-sm text-accent-foreground font-bold">{caption}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg text-muted-foreground font-medium">{description}</p>
    </div>
  );
};

type ProfessionalExperienceCardProps = {
  title: string
  description: string
  appIconSrc: string
  heroSrc: string
  appStoreURL: string
  responsibilities: string
}

const ProfessionalExperienceCard: React.FC<ProfessionalExperienceCardProps> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
              <Image
                src={props.appIconSrc}
                width={50}
                height={50}
                alt="Hero image"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold line-clamp-1">{props.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-1">{props.description}</p>
            </div>
          </div>

          <p className="border-t pt-4">{props.responsibilities}</p>
        </div>
      </CardContent>
    </Card>
  );
};

type PersonalProjectCardProps = {
  title: string
  description: string
  appIconSrc: string
  heroSrc: string
  appStoreURL: string
  githubURL: string
}

const PersonalProjectCard: React.FC<PersonalProjectCardProps> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="pt-6 w-full">

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
            <Image
              src={props.heroSrc}
              alt="Hero image."
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
              <Image
                src={props.appIconSrc}
                width={50}
                height={50}
                alt="Hero image"
                className="border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold line-clamp-1">{props.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-1">{props.description}</p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col pt-6 sm:pt-4 gap-3 w-full">
            <Link href={props.appStoreURL} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="default" className="w-full">
                <Apple className="mr-2 h-4 w-4" /> App Store
              </Button>
            </Link>
            <Link href={props.githubURL} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card >
  );
};

type TechnologyCardProps = {
  title: string
  iconSrc: string
  href: string
}

const TechnologyCard: React.FC<TechnologyCardProps> = (props) => {
  return (
    <Button variant="outline" className="relative p-8 w-50 h-50">
      <div className="relative">
        <Image
          src={props.iconSrc}
          width={50}
          height={50}
          alt="Hero image"
          className="rounded-lg"
        />
      </div>
    </Button>
  )
}

type EducationCardProps = {
  title: string
  description: string
  caption: string
  iconSrc: string
  href: string
}
const EducationCard: React.FC<EducationCardProps> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="w-full">
          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
              <Image
                src={props.iconSrc}
                width={50}
                height={50}
                alt="Hero image"
                className="border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold line-clamp-1">{props.title}</p>
              <p className="text-sm line-clamp-1">{props.description}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{props.caption}</p>
            </div>
          </div>

        </div>
      </CardContent>
    </Card >
  );
};


const CTA: React.FC = () => (
  <div className="flex flex-col w-full bg-neutral-50 bg-opacity-5 relative">
    <div className="max-w-3xl mx-auto px-8 my-8 pt-4 mb-24 px-4 pb-8 w-full">
      <h2 className="text-3xl font-extrabold pb-2">
        Contact Me!
      </h2>
      <p className="text-xl text-muted-foreground pb-4">
        {"Let's start writing some code."}
      </p>
      <div className="flex gap-4">
        <Button className="w-full">Contact Me</Button>
        <Button variant="outline" className="w-full">Resume PDF</Button>
      </div>
    </div>
  </div>
);
