import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Link from "next/link";
import { FaGithub as Github } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer absolute bottom-0 bg-background bg-opacity-70 w-full">
      <div className="max-w-2xl mx-auto px-4 sm:border-l sm:border-r border-t">
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
