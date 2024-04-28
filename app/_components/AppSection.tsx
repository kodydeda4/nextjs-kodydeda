"use client"

import SectionHeader from "@/app/_components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { App } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaApple as Apple, FaGithub as Github } from "react-icons/fa";

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function AppSection() {
  return (
    <AppSectionOLD />
  )
}

function AppSectionOLD() {
  return (
    <Card className="w-full">
      <CardTitle className="p-6">
        <SectionHeader
          caption="Personal Projects"
          title="🛠️ Apps I've Made"
          description="My personal work featured on the AppStore."
        />
      </CardTitle>
      <CardContent>
        <TableView />
      </CardContent>
    </Card >
  )
}

function TableView() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableBody>
            {RESUME.apps.map((value, index) => (
              <TableRow key={index}>
                <TableCell>
                  <AppCard key={index} {...value} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const AppCard: React.FC<App> = (props) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="relative">
        <Image
          src={props.srcAppIcon}
          width={40}
          height={40}
          alt="Hero image"
          className="rounded-lg border"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold line-clamp-1">{props.title}</p>
        <p className="text-sm line-clamp-1">{props.description}</p>
      </div>

      {/* <Link href={props.urlGithub} rel="noopener noreferrer" target="_blank"> */}
      {/*   <Button variant="outline"> */}
      {/*     <Github className="mr-2 h-4 w-4" /> Github */}
      {/*   </Button> */}
      {/* </Link> */}
      {/* <Link href={props.urlAppStore} rel="noopener noreferrer" target="_blank"> */}
      {/*   <Button variant="default"> */}
      {/*     <Apple className="mr-2 h-4 w-4" /> App Store */}
      {/*   </Button> */}
      {/* </Link> */}
    </div>
  );
};


