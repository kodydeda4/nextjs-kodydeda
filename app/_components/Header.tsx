import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { RESUME } from "@/lib/data";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-black w-full rounded-lg h-64 relative">
        <Image
          src="/avatar-hero.png"
          alt="Hero image."
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold">
          Hi, I&apos;m {RESUME.name}.
        </h1>
        <h2 className="text-3xl font-extrabold pb-2">
          Welcome to my Portfolio!
        </h2>
        <p className="text-xl text-muted-foreground pb-4">
          {" iOS Developer, US Remote"}
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
