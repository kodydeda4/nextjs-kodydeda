'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent
} from "@/components/ui/sheet"
import { App, RESUME } from "@/constants/types"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import * as React from "react"

export default function AppSheet() {
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

            {RESUME.apps.map((value, index) => (
              <AppLink key={index} {...value} />
            ))}
          </div>
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
