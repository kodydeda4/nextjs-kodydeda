import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaApple as Apple, FaGithub as Github } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function AppSection() {
  return (
    <Card className="w-full">
      <CardTitle className="p-6">
        <SectionHeader
          caption="Personal Projects"
          title="🛠️ Apps I've Made"
          description="My personal work featured on the AppStore."
        />
      </CardTitle>
      <CardContent>
        <div className="px-12">
          <CarouselDemo />
          {/* <div className="flex flex-col sm:flex-row gap-4 w-full"> */}
          {/*   {RESUME.apps.map((value, index) => ( */}
          {/*     <AppCard key={index} {...value} /> */}
          {/*   ))} */}
          {/* </div> */}
        </div>
      </CardContent>
    </Card >
  )
}


function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {RESUME.apps.map((value, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <AppCard key={index} {...value} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const AppCard: React.FC<App> = (props) => {
  return (
    <div className="w-full">
      <div className="w-full">

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
    </div >
  );
};

