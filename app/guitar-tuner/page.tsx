import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import { Button } from "@/components/ui/button"
import { FaGithub as Github } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

export default function Page() {
  const title: string = "Guitar Tuner"
  const description: string = "Musical Education"
  const hero: string = "/guitar-tuner-hero-2.png"
  const icon: string = "/guitar-tuner.png"
  const features = [
    "Multiple tuning options including standard and drop tunings.",
    "Ability to tune different instruments such as guitar or bass.",
    "Clean, easy-to-read user interface with intuitive navigation."
  ];
  const appStoreURL = "https://apps.apple.com/us/app/accutune-guitar-tuner/id6472688914"
  const githubURL = "https://github.com/kodydeda4/GuitarTuner"

  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col">

            {/* Image */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
              <Image
                src={hero}
                alt="Hero image."
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Header */}
            <div className="flex flex-row justify-start gap-3 pt-6">
              <div className="justify-start relative">
                <Image
                  src={icon}
                  width={50}
                  height={50}
                  alt="Hero image"
                  className="border rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-0">
                <h1 className="text-xl font-extrabold">
                  {title}
                </h1>
                <p className="text-muted-foreground pb-4">
                  {description}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 w-full">
              <Link href={appStoreURL} rel="noopener noreferrer" target="_blank" className="w-full">
                <Button variant="default" className="w-full">
                  <Apple className="mr-2 h-4 w-4" /> App Store
                </Button>
              </Link>
              <Link href={githubURL} rel="noopener noreferrer" target="_blank" className="w-full">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
              </Link>
            </div>

            {/* Features */}
            <h2 className="text-2xl font-extrabold pt-8">
              Features
            </h2>
            <ul className="w-full">
              {features.map((value, index) => (
                <li key={index}>• {value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
