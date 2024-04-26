import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import { Button } from "@/components/ui/button"
import { FaGithub as Github } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

export default function Page() {
  const title: string = "Peg Puzzle Classic"
  const description: string = "Video Game"
  const hero: string = "/peg-puzzle-classic-hero-2.png"
  const icon: string = "/peg-puzzle-classic.png"
  const features = [
    "Single-player puzzle challenge using a triangular board with 15 holes.",
    "Jump pegs over each other to remove them, aiming to leave only one peg.",
    "Modern design for a timeless classic.",
  ]

  const appStoreURL = "https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729"
  const githubURL = "https://github.com/kodydeda4/PegPuzzleClassic"

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
