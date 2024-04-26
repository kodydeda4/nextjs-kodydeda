import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RESUME } from "@/lib/data";

export default function CTA() {
  return (
    <div className="flex flex-col w-full bg-neutral-500 bg-opacity-5 relative">
      <div className="max-w-3xl mx-auto px-12 my-8 pt-4 mb-24 pb-8 w-full">
        <h2 className="text-3xl font-extrabold pb-2">
          Contact Me!
        </h2>
        <p className="text-xl text-muted-foreground pb-4">
          {"Let's start writing some code."}
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
    </div>
  );
}