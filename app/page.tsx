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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Home() {
  return (
    <>
      <div className="px-4">
        <div className="flex justify-center w-full">
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://live.staticflickr.com/65535/51904519089_c6ef9deaff_o.png" alt="@kodydeda" />
            <AvatarFallback>KD</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">
            Hi, I'm Kody Deda
          </h1>
          <h2 className="text-3xl font-extrabold">
            Welcome to my portfolio!
          </h2>
          <p className="text-xl font-neutral-400">
            This is a description of my software development skills and stuff, especially related to SwiftUI.
          </p>
        </div>

        <div className="py-4">
          <SectionHeader
            caption="Professional Experience"
            title="🍎 3 Years of Professional Experience"
            description="I've worked on a few apps in my day. Feel free to take a look!"
          />
        </div>
        <CardWithForm />
      </div>
    </>
  );
}

const SectionHeader: React.FC<{ caption: string; title: string; description: string }> = ({ caption, title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-blue-500 font-bold">
        {caption}
      </p>
      <h2 className="text-2xl font-bold">
        {title}
      </h2>
      <p className="text-base font-medium">{description}</p>
    </div>
  );
};

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>iOS Developer - PocketRadar</CardTitle>
        <CardDescription>May 2022 - Present</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
