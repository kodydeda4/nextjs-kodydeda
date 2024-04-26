import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { FaGithub as Github } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

export default function Page() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col">

            {/* Image */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
              <Image
                src="/peg-puzzle-classic-hero-2.png"
                alt="Hero image."
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Header */}
            <div className="flex flex-row justify-start gap-3 pt-6">
              <div className="justify-start relative">
                <Image
                  src={"/peg-puzzle-classic.png"}
                  width={50}
                  height={50}
                  alt="Hero image"
                  className="border rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-0">
                <h1 className="text-xl font-extrabold">
                  Peg Puzzle Classic
                </h1>
                <p className="text-muted-foreground pb-4">
                  {"A realy cool game."}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 w-full">
              <Link href={"https://www.google.com"} rel="noopener noreferrer" target="_blank" className="w-full">
                <Button variant="default" className="w-full">
                  <Apple className="mr-2 h-4 w-4" /> App Store
                </Button>
              </Link>
              <Link href={"https://www.google.com"} rel="noopener noreferrer" target="_blank" className="w-full">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-extrabold pt-8">
              Features
            </h2>

            <ul className="w-full">
              <li>• Does something super cool that's really awesome man.</li>
              <li>• Does something super cool that's really awesome man.</li>
              <li>• Does something super cool that's really awesome man.</li>
            </ul>

          </div>
        </div>
      </div>
    </main>
  );
}
