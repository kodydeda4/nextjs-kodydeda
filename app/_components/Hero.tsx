'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import { ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub as Github, FaLinkedinIn as LinkedIn } from "react-icons/fa";
import MainSheet from "./MainSheet";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <ProfileHeader />
      <div className="flex flex-col px-6 pt-14">
        <h1 className="text-2xl font-bold">
          {RESUME.name}
        </h1>
        <h2 className="text-lg font-semibold pb-2">
          {RESUME.profession}
        </h2>
        <p className="text pb-4 text-muted-foreground">
          {RESUME.description}
        </p>
        <div className="flex gap-4">
          <Link href={`mailto:${RESUME.email}`} className="w-full">
            <Button className="w-full">Contact Me</Button>
          </Link>
          <Link href={RESUME.urlResume} download rel="noopener noreferrer" target="_blank" className="w-full">
            <Button variant="outline" className="w-full">Resume PDF</Button>
          </Link>
        </div>
      </div>
    </div >
  );
}

function ProfileHeader() {
  return (
    <div
      className="relative h-48 w-full bg-cover bg-center h-40 sm:h-50 border-b"
      style={{ backgroundImage: `url('/avatar-hero.png')` }}
    >
      {/* Position the avatar on top of the background */}
      <div className="absolute bottom-0 left-4 translate-y-1/2">
        <Avatar className="w-28 h-28 border">
          {/* <AvatarImage src={RESUME.srcAvatar} alt="User avatar" /> */}
          <AvatarImage src={RESUME.srcAvatar} alt="User avatar" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <Links />
    </div>
  )
}

function Links() {
  return (
    <div className="absolute bottom-0 right-4 translate-y-14 flex gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <GithubLink />
          <LinkedInLink />
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

type NavLink = {
  title: string
  description: string
  href: string
}

const GithubLink: React.FC = () => {
  return (
    <NavigationMenuItem>
      <Link href={RESUME.urlGithub} rel="noopener noreferrer" target="_blank">
        <NavigationMenuLink>
          <Button variant="outline" size="icon">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

const LinkedInLink: React.FC = () => {
  return (
    <NavigationMenuItem>
      <Link href={RESUME.urlLinkedIn} rel="noopener noreferrer" target="_blank">
        <NavigationMenuLink>
          <Button variant="outline" size="icon">
            <LinkedIn className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

const ModeToggle: React.FC = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
