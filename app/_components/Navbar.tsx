'use client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { RESUME } from "@/lib/data"
import { App } from "@/lib/definitions"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { FaGithub as Github, FaLinkedinIn as LinkedIn } from "react-icons/fa"
import MainSheet from "./MainSheet"

type NavLink = {
  title: string
  description: string
  href: string
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-b bg-white bg-opacity-70 dark:bg-background dark:bg-opacity-80">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <NavigationMenu>
            <NavigationMenuList>
              <SheetButton />
              <HomeLink />
              {RESUME.apps.map((value, index) => (
                <AppLink key={index} {...value} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <GithubLink />
              <LinkedInLink />
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div >
      </div >
    </nav >
  )
}

const SheetButton: React.FC = () => {
  return (
    <NavigationMenuItem className="sm:hidden">
      <MainSheet />
    </NavigationMenuItem>
  )
}

const HomeLink: React.FC = () => {
  return (
    <NavigationMenuItem>
      {/* <NavigationMenuItem className="hidden sm:block"> */}
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink>
          <Button variant="ghost" className="font-extrabold">
            Home
          </Button>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

const AppLink: React.FC<App> = (props) => {
  return (
    <NavigationMenuItem className="hidden sm:block">
      <Link href={props.urlLocal} legacyBehavior passHref>
        <NavigationMenuLink>
          <Button variant="ghost" className="text-muted-foreground">
            {props.title}
          </Button>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

const GithubLink: React.FC = () => {
  return (
    <NavigationMenuItem>
      <Link href={RESUME.urlGithub} rel="noopener noreferrer" target="_blank">
        <NavigationMenuLink>
          <Button variant="ghost" size="icon">
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
          <Button variant="ghost" size="icon">
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
        <Button variant="ghost" size="icon">
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
