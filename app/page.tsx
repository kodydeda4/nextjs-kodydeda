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
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
        <div className="flex flex-col gap-16">
          <Header />
          <ProfessionalExperience />
          <AppProjects />
          <Technologies />
          <Education />
        </div>
      </div>
      <CTA />
    </main>
  );
}


