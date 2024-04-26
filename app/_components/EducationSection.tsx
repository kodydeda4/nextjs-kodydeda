import SectionHeader from "@/app/_components/SectionHeader";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Education, RESUME } from "@/constants/types";
import Image from "next/image";
import * as React from "react";

export default function EducationSection() {
  return (
    <>
      <SectionHeader
        caption="Education"
        title="🎓 University Education"
        description="These are some of my favorite tools."
      />
      <div className="flex flex-row gap-4 w-full">
        {RESUME.education.map((value, index) => (
          <EducationCard key={index} {...value} />
        ))}
      </div>
    </>
  )
}

const EducationCard: React.FC<Education> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="w-full">
          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
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

        </div>
      </CardContent>
    </Card >
  );
};

