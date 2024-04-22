'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustify } from "lucide-react"
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedinIn as LinkedIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-b bg-white bg-opacity-70 dark:bg-background dark:bg-opacity-80">
      <div className="max-w-4xl mx-auto px-4">
        < div className="flex items-center justify-between h-16" >
          <NavigationMenu>
            <NavigationMenuList>

              {/* <NavigationMenuItem> */}
              {/*   <SheetDemo /> */}
              {/* </NavigationMenuItem> */}

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Button variant="ghost" className="font-extrabold">
                      Kody Deda
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/guitar-tuner" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Button variant="ghost" className="text-muted-foreground">
                      Guitar Tuner
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/peg-puzzle-classic" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Button variant="ghost" className="text-muted-foreground">
                      Peg Puzzle Classic
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <Link href="https://www.linkedin.com/in/kodydeda4/" rel="noopener noreferrer" target="_blank">
                  <NavigationMenuLink>
                    <Button variant="ghost" size="icon">
                      <LinkedIn className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <Link href="https://github.com/kodydeda4" rel="noopener noreferrer" target="_blank">
                  <NavigationMenuLink>
                    <Button variant="ghost" size="icon">
                      <Github className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>


              {/* <NavigationMenuItem> */}
              {/*   <ModeToggle /> */}
              {/* </NavigationMenuItem> */}

            </NavigationMenuList>
          </NavigationMenu>
        </div >
      </div >
    </nav >
  )
}


function SheetDemo() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open)
  }

  return (
    <>
      <Button onClick={handleClick} variant="ghost" size="icon">
        <AlignJustify className="h-4 w-4" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              {"Make changes to your profile here. Click save when you're done."}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

function ModeToggle() {
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
