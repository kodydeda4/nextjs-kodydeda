import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { RESUME } from "@/lib/data";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full rounded-lg h-64 relative">
        <Image
          src="/avatar-hero.png"
          alt="Hero image."
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold">
          Hi, I&apos;m ${RESUME.name}
        </h1>
        <h2 className="text-3xl font-extrabold pb-2">
          Welcome to my portfolio!
        </h2>
        <p className="text-xl text-muted-foreground pb-4">
          {"This is a description of my software development skills and stuff, especially related to SwiftUI."}
        </p>
        <div className="flex gap-4">
          <Button className="w-full">Contact Me</Button>
          <Link href={RESUME.urlResume} download rel="noopener noreferrer" target="_blank" className="w-full">
            <Button variant="outline" className="w-full">Resume PDF</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
