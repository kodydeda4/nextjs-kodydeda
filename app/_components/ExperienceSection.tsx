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
        description="Industry experience building enterprise software."
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
        <div className="w-full">
          <div className="flex flex-row justify-start gap-4 pt-6 pb-2">
            <div className="relative">
              <Image
                src={props.srcIcon}
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

          <ul className="list-disc border-t pt-2 px-4 w-full">
            {props.responsibilities.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
