import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { TechnologyCardProps, technologies } from "@/constants/types";
import Image from "next/image";
import * as React from "react";

export default function Technologies() {
  return (
    <div>
      <SectionHeader
        caption="Technology"
        title="🌎 Technologies & Frameworks"
        description="These are some of my favorite tools."
      />
      <div className="flex flex-wrap gap-4 w-full">
        {technologies.map((value, index) => (
          <TechnologyCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

const TechnologyCard: React.FC<TechnologyCardProps> = (props) => {
  return (
    <Button variant="outline" className="relative p-8 w-50 h-50">
      <div className="relative">
        <Image
          src={props.iconSrc}
          width={50}
          height={50}
          alt="Hero image"
          className="rounded-lg"
        />
      </div>
    </Button>
  )
}
