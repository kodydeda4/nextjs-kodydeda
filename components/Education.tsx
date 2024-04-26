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

export default function Education() {
  return (
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

