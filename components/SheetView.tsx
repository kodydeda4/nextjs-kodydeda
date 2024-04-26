'use client'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import { FaGithub as Github, FaLinkedinIn as LinkedIn } from "react-icons/fa"
import ModeToggle from "./ModeToggle"

export default function SheetView() {
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
        <SheetContent side="left">
          <SheetClose asChild>
            <Link href={"/"}><p className="font-bold">{"Kody Deda"}</p></Link>
          </SheetClose>
          <p className="font-bold pt-6 gap-1">My Apps</p>
          <div className="text-muted-foreground">
            <SheetClose asChild>
              <Link href={"/peg-puzzle-classic"}><p>{"Peg Puzzle Classic"}</p></Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/guitar-tuner"}><p>{"Guitar Tuner"}</p></Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

