import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaApple as Apple, FaGithub as Github } from "react-icons/fa";

export default function AppSection() {
  return (
    <div>
      <SectionHeader
        caption="Personal Projects"
        title="🛠️ Apps I've Made"
        description="My personal work featured on the AppStore."
      />
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {RESUME.apps.map((value, index) => (
          <AppCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

const gradients = {
  "IDD Camera": "from-yellow-500 to-orange-500",
  "Peg Puzzle Classic": "from-indigo-500 to-purple-500",
  "Guitar Tuner": "from-blue-700 to-indigo-500",
};

const AppCard: React.FC<App> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="pt-6 w-full">
          <div className={`bg-gradient-to-r ${gradients[`${props.title}`] || "from-gray-500 to-gray-700"} w-full rounded-lg h-64 relative`}>
            <Image
              src={props.srcHero}
              alt="Hero image."
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="w-full pt-6">
            <div className="flex flex-row justify-start gap-4">
              <div className="justify-start relative">
                <Image
                  src={props.srcAppIcon}
                  width={40}
                  height={40}
                  alt="Hero image"
                  className="rounded-lg border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold line-clamp-1">{props.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{props.description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row pt-4 gap-3 w-full" >
            <Link href={props.urlAppStore} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="default" className="w-full">
                <Apple className="mr-2 h-4 w-4" /> App Store
              </Button>
            </Link>
            <Link href={props.urlGithub} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card >
  );
};


