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
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 border rounded-xl p-2">
        {RESUME.technologies.map((value, index) => (
          <TechnologyCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

const TechnologyCard: React.FC<Technology> = (props) => {
  const size = 40

  return (
    <div className="flex relative items-center justify-center p-3 w-full h-full">
      <Image
        src={props.srcIcon}
        width={size}
        height={size}
        alt="Hero image"
        className="rounded-lg"
      />
    </div>
  )
}
