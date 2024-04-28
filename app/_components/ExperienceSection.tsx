import SectionHeader from "@/app/_components/SectionHeader";
import {
  Card,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { RESUME } from "@/lib/data";
import { Experience } from "@/lib/definitions";
import Image from "next/image";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/AccordionKody";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"


export default function ExperienceSection() {
  return (
    <Card className="w-full">
      <CardTitle className="px-6 pt-6 pb-4">
        <SectionHeader
          caption="Professional Experience"
          title="📖 3 Years of Experience"
          description="Industry experience building enterprise software."
        />
      </CardTitle>
      <CardContent>
        <TableView />
      </CardContent>
    </Card>
  )
}

function TableView() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableBody>
            {RESUME.experience.map((value, index) => (
              <TableRow key={index}>
                <TableCell>
                  <ExperienceCard key={index} {...value} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const ExperienceCard: React.FC<Experience> = (props) => {
  const size = 40

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex flex-row justify-start gap-4 text-left">
            <div className="relative">
              <Image
                src={props.srcIcon}
                width={size}
                height={size}
                alt="Hero image"
                className="border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold line-clamp-1">{props.title}</p>
              <p className="text-sm line-clamp-1">{props.description}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{props.caption}</p>
            </div>
          </div>

        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc border-t pt-3 px-4 w-full">
            {props.responsibilities.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

