import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/constants/data";
import { App } from "@/constants/types";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaApple as Apple, FaGithub as Github } from "react-icons/fa";

export default function AppSection() {
  return (
    <>
      <SectionHeader
        caption="Personal Projects"
        title="🛠️ Apps I've Made"
        description="I've worked on a few apps in my day. Feel free to take a look!"
      />
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {RESUME.apps.map((value, index) => (
          <AppCard key={index} {...value} />
        ))}
      </div>
    </>
  )
}

const AppCard: React.FC<App> = (props) => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="pt-6 w-full">

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
            <Image
              src={props.srcHero}
              alt="Hero image."
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-row justify-start gap-4 pt-6">
            <div className="justify-start relative">
              <Image
                src={props.srcAppIcon}
                width={50}
                height={50}
                alt="Hero image"
                className="border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold line-clamp-1">{props.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-1">{props.description}</p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col pt-6 sm:pt-4 gap-3 w-full">
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

