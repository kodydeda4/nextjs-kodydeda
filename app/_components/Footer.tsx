import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Link from "next/link";
import { FaGithub as Github } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t footer absolute bottom-0 bg-background bg-opacity-70 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          <Link href={RESUME.urlWebsite} rel="noopener noreferrer" target="_blank">
            <Button variant="link" className="text-muted-foreground">
              <Github className="mr-2 h-7 w-7" />&copy; {new Date().getFullYear()} {RESUME.name}.
            </Button>
          </Link>
        </div>
      </div>
    </footer >
  )
}
