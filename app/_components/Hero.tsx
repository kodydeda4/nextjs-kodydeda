import { Button } from "@/components/ui/button";
import { RESUME } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <ProfileHeader/>
      <div className="flex flex-col px-6 pt-14">
        <h1 className="text-2xl font-extrabold">
          {RESUME.name}
        </h1>
        <h2 className="text-lg pb-2">
          {RESUME.profession}
        </h2>
        <p className="text pb-4 text-muted-foreground">
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

function ProfileHeader() {
  return (
    <div
      className="relative h-48 w-full bg-cover bg-center h-40 sm:h-60 border-b"
      style={{ backgroundImage: `url(${RESUME.srcHero})` }}
    >
      {/* Position the avatar on top of the background */}
      <div className="absolute bottom-0 left-4 translate-y-1/2">
        <Avatar className="w-28 h-28 border">
          {/* <AvatarImage src={RESUME.srcAvatar} alt="User avatar" /> */}
          <AvatarImage src={RESUME.srcAvatar} alt="User avatar" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}