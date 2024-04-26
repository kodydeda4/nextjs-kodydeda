import SectionHeader from "@/app/_components/SectionHeader";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { Experience } from "@/lib/definitions";
import Image from "next/image";
import * as React from "react";

export default function ExperienceSection() {
  return (
    <div>
      <SectionHeader
        caption="Professional Experience"
        title="📖 3 Years of Professional Experience"
        description="I've worked on a few apps in my day. Feel free to take a look!"
      />
      <div className="flex flex-col gap-4 w-full">
        {RESUME.experience.map((value, index) => (
          <ExperienceCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

const ExperienceCard: React.FC<Experience> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
              <Image
                src={props.srcIcon}
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

          <ul className="border-t pt-4 w-full">
            {props.responsibilities.map((value, index) => (
              <li key={index}>• {value}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
