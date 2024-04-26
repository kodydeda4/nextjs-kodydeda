import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import { Technology } from "@/lib/definitions";
import Image from "next/image";
import * as React from "react";

export default function TechnologySection() {
  return (
    <div>
      <SectionHeader
        caption="Technology"
        title="🌎 Technologies & Frameworks"
        description="These are some of my favorite tools."
      />
      <div className="flex flex-wrap gap-4 w-full pt-4">
        {RESUME.technologies.map((value, index) => (
          <TechnologyCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

const TechnologyCard: React.FC<Technology> = (props) => {
  return (
    <Button variant="outline" className="relative p-8 w-50 h-50">
      <div className="relative">
        <Image
          src={props.srcIcon}
          width={50}
          height={50}
          alt="Hero image"
          className="rounded-lg"
        />
      </div>
    </Button>
  )
}
