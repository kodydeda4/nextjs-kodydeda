import SectionHeader from "@/components/SectionHeader";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ProfessionalExperienceCardProps, experience } from "@/constants/types";
import Image from "next/image";
import * as React from "react";

export default function ProfessionalExperience() {
  return (
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
  )
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
