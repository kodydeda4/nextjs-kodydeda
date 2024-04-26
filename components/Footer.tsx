'use client'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { RESUME } from "@/constants/types";

export default function Footer() {
  return (
    <footer className="border-t footer absolute bottom-0 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={RESUME.urlWebsite} rel="noopener noreferrer" target="_blank">
                  <NavigationMenuLink>
                    <Button variant="ghost">
                      <p>&copy; {new Date().getFullYear()} {RESUME.name}.</p>
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer >
  )
}
