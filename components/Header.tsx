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
import SectionHeader from "@/components/SectionHeader";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import AppProjects from "@/components/AppProjects";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
        <Image
          src="/avatar-hero.png"
          alt="Hero image."
          layout="fill"
          objectFit="contain"
        />
      </div>
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
    </div>
  );
}
