import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { Technology } from "@/lib/definitions";
import Image from "next/image";
import * as React from "react";

export default function TechnologySection() {
  return (
    <Card className="w-full">
      <CardTitle className="p-6">
        <SectionHeader
          caption="Technology"
          title="🌎 Technologies & Frameworks"
          description="These are some of my favorite tools."
        />
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {RESUME.technologies.map((value, index) => (
            <TechnologyCard key={index} {...value} />
          ))}
        </div>
      </CardContent>
    </Card >
  )
}

const TechnologyCard: React.FC<Technology> = (props) => {
  const size = 40

  return (
    <Button variant="outline" className="relative p-3 w-full h-full">
      <div className="relative">
        <Image
          src={props.srcIcon}
          width={size}
          height={size}
          alt="Hero image"
          className="rounded-lg"
        />
      </div>
    </Button>
  )
}
