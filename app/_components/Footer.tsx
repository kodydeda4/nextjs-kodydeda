import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t footer absolute bottom-0 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={RESUME.urlWebsite} rel="noopener noreferrer" target="_blank">
            <Button variant="ghost">
              <p>&copy; {new Date().getFullYear()} {RESUME.name}.</p>
            </Button>
          </Link>
        </div>
      </div>
    </footer >
  )
}
