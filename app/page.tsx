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
import { ProfessionalExperienceCardProps, AppCardProps, TechnologyCardProps, EducationCardProps, experience, apps, technologies, education } from "@/constants/types";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
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
                <AppCard key={index} {...value} />
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
      <Link href="/resume.pdf" download rel="noopener noreferrer" target="_blank" className="w-full">
        <Button variant="outline" className="w-full">Resume PDF</Button>
      </Link>
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

const AppCard: React.FC<AppCardProps> = (props) => {
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
  <div className="flex flex-col w-full bg-neutral-500 bg-opacity-5 relative">
    <div className="max-w-3xl mx-auto px-12 my-8 pt-4 mb-24 pb-8 w-full">
      <h2 className="text-3xl font-extrabold pb-2">
        Contact Me!
      </h2>
      <p className="text-xl text-muted-foreground pb-4">
        {"Let's start writing some code."}
      </p>
      <div className="flex gap-4">
        <Button className="w-full">Contact Me</Button>
        <Link href="/resume.pdf" download rel="noopener noreferrer" target="_blank" className="w-full">
          <Button variant="outline" className="w-full">Resume PDF</Button>
        </Link>
      </div>
    </div>
  </div>
);
