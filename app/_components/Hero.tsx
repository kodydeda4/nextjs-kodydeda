import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-black w-full rounded-lg h-64 relative">
        <Image
          src={RESUME.srcHero}
          alt="Hero image."
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-extrabold">
          {RESUME.name}
        </h1>
        <h2 className="text-lg pb-2">
          {RESUME.profession}
        </h2>
        <p className="text pb-4">
          {RESUME.description}
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
    </div >
  );
}



