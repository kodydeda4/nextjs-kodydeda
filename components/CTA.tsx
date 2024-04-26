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
import Header from "@/components/Header";

export default function CTA() {
  return (
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
}
