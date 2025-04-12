import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaApple as Apple, FaGithub as Github } from "react-icons/fa";

export default function CommunityAndWorkshopsSection() {
  return (
    <div>
      <SectionHeader
        caption="Education"
        title="🤝 Community & Workshops"
        description="Community, collaboration, and mentorship with fellow developers"
      />
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <WilmingtonIOCard key={0}/>
          <UNCWWorkshopCard key={1}/>
      </div>
    </div>
  )
}

const WilmingtonIOCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="pt-6 w-full">
          <div className={`bg-gradient-to-r from-yellow-500 to-yellow-300 || "from-gray-500 to-gray-700"} w-full rounded-lg h-64 relative`}>
            <Image
              src={"/wilmington-io-icon-hero.png"}
              alt="Hero image."
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="w-full pt-6">
            <div className="flex flex-row justify-start gap-4">
              <div className="justify-start relative">
                <Image
                  src={"/wilmington-io.png"}
                  width={40}
                  height={40}
                  alt="Hero image"
                  className="rounded-lg border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold line-clamp-1">{"Wilmington.io"}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{"Programmer Meetup"}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row pt-4 gap-3 w-full" >
            <Link href={"https://www.linkedin.com/company/wilmingtonio/"} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card >
  );
};

const UNCWWorkshopCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="pt-6 w-full">
          <div className={`bg-gradient-to-r from-teal-300 to-teal-400 || "from-gray-500 to-gray-700"} w-full rounded-lg h-64 relative`}>
            <Image
              src={"/swift-icon.png"}
              alt="Hero image."
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="w-full pt-6">
            <div className="flex flex-row justify-start gap-4">
              <div className="justify-start relative">
                <Image
                  src={"/uncw.png"}
                  width={40}
                  height={40}
                  alt="Hero image"
                  className="rounded-lg border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold line-clamp-1">{"iOS Workshop"}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{"Build your first app"}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row pt-4 gap-3 w-full" >
            <Link href={"https://uncw.edu/academics/colleges/cse/departments/computer-science/"} rel="noopener noreferrer" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card >
  );
};

