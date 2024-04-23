import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github } from "lucide-react"
import { Apple } from "lucide-react"


export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-8">
        <div className="px-4 gap-8">
          <div className="flex justify-center w-full">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://live.staticflickr.com/65535/51904519089_c6ef9deaff_o.png" alt="@kodydeda" />
              <AvatarFallback>KD</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col gap-2 pb-8">
            <h1 className="text-3xl font-extrabold">
              {"Hi, I'm Kody Deda"}
            </h1>
            <h2 className="text-3xl font-extrabold">
              Welcome to my portfolio!
            </h2>
            <p className="text-xl text-neutral-400">
              {"This is a description of my software development skills and stuff, especially related to SwiftUI."}
            </p>

            <div className="flex gap-4">
              <Button className="w-full">Contact Me</Button>
              <Button variant="outline" className="w-full">Resume PDF</Button>
            </div>
          </div>

          <SectionHeader
            caption="Professional Experience"
            title="🍎 3 Years of Professional Experience"
            description="I've worked on a few apps in my day. Feel free to take a look!"
          />
          <ExperienceCard />

          <div className="flex flex-col gap-2 py-4">
            {Array(50).fill(1).map((_) => (
              <CardView />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const SectionHeader: React.FC<{ caption: string; title: string; description: string }> = ({ caption, title, description }) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <p className="text-sm text-blue-500 font-bold">{caption}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg text-neutral-400 font-medium">{description}</p>
    </div>
  );
};

function ExperienceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Peg Puzzle Classic</CardTitle>
        <CardDescription>Game</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant="default" className="w-full">
          <Apple className="mr-2 h-4 w-4" /> App Store
        </Button>
        <Button variant="outline" className="w-full">
          <Github className="mr-2 h-4 w-4" /> Github
        </Button>
      </CardFooter>
    </Card>
  )
}

function CardView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <p>Footer</p>
      </CardFooter>
    </Card>
  )
}
