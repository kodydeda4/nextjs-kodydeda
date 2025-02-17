import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex flex-col w-full bg-neutral-500 bg-opacity-5 relative border-t">
      <div className="max-w-2xl mx-auto px-6 my-8 py-4 pb-10 mb-24 w-full">
        <h2 className="text-2xl font-extrabold pb-2">
          Contact Me!
        </h2>
        <p className="text-lg text-muted-foreground pb-4">
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
