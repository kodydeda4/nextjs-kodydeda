import SectionHeader from "@/app/_components/SectionHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/components/ui/table";
import { RESUME } from "@/lib/data";
import { Education } from "@/lib/definitions";
import Image from "next/image";
import * as React from "react";

export default function EducationSection() {
  return (
    <div>
      <SectionHeader
        caption="Education"
        title="🎓 University Education"
        description="Bachelor's of Computer Science"
      />
      <TableView />
    </div>
  )
}

function TableView() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableBody>
            {RESUME.education.map((value, index) => (
              <TableRow key={index}>
                <TableCell>
                  <EducationCard key={index} {...value} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table >
      </div >
    </div >
  )
}

const EducationCard: React.FC<Education> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-start gap-4">
        <div className="justify-start relative">
          <Image
            src={props.srcIcon}
            width={40}
            height={40}
            alt="Hero image"
            className="rounded-lg border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold line-clamp-1">{props.title}</p>
          <p className="text-sm line-clamp-1">{props.description}</p>
          <p className="text-xs text-muted-foreground line-clamp-1">{props.caption}</p>
        </div>
      </div>
    </div>
  );
};

