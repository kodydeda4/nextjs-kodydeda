'use client'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent
} from "@/components/ui/sheet";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function MainSheet() {
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
            <Link href={"/"}><p className="text-lg font-bold">{RESUME.name}</p></Link>
          </SheetClose>

          <p className="text-lg font-bold pt-6 gap-2">My Apps</p>

          <ul className="list-none w-full text-base text-muted-foreground">
            {RESUME.apps.map((value, index) => (
              <AppLink key={index} {...value} />
            ))}
          </ul>

        </SheetContent>
      </Sheet>
    </>
  )
}

const AppLink: React.FC<App> = (props) => {
  return (
    <SheetClose asChild>
      <Link href={props.urlLocal}><p>{props.title}</p></Link>
    </SheetClose>
  )
}
