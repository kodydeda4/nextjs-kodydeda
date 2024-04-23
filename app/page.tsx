import Image from "next/image";
import Link from "next/link";
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGithub as Github } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

const personalProjects: PersonalProjectCardProps[] = [
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
    appStoreURL: "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729",
    githubURL: "https://github.com/kodydeda4/PegPuzzleClassic",
  },
]

const personalExperience: ProfessionalExperienceCardProps[] = [
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

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-8 my-8 pt-4 mb-24 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center w-full">
          <Image
            src="/avatar.png"
            width={125}
            height={125}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <Header />

        <div>
          <SectionHeader
            caption="Professional Experience"
            title="🍎 3 Years of Professional Experience"
            description="I've worked on a few apps in my day. Feel free to take a look!"
          />
          <div className="flex flex-col gap-4 w-full">
            {personalExperience.map((value, index) => (
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
            {personalProjects.map((value, index) => (
              <PersonalProjectCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
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
      <CardHeader>
        <div className="flex gap-4">
          <Image
            src={props.appIconSrc}
            width={50}
            height={50}
            alt="Screenshots of the dashboard project showing desktop version"
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p>{props.responsibilities}</p>
      </CardContent>

      <CardFooter className="flex gap-4">
        <Link href={props.appStoreURL} className="w-full">
          <Button variant="default" className="w-full">
            <Apple className="mr-2 h-4 w-4" /> App Store
          </Button>
        </Link>
      </CardFooter>
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
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg">
            <Image
              src={props.heroSrc}
              width={200}
              height={200}
              alt="Hero image"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start">
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
              <CardDescription>{props.description}</CardDescription>
            </div>
          </div>

          <div className="flex flex-col pt-4 gap-3 w-full">
            <Link href={props.appStoreURL} className="w-full">
              <Button variant="default" className="w-full">
                <Apple className="mr-2 h-4 w-4" /> App Store
              </Button>
            </Link>
            <Link href={props.githubURL} className="w-full">
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
