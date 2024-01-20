"use client";
import {
  Card,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabPanel,
  Text,
  Title,
} from "@tremor/react";
import { BuildingOffice2Icon } from "@heroicons/react/16/solid";
import { experiences } from "@/data/experiences";
import dayjs from "dayjs";
import Link from "next/link";

export function Experience() {
  return <Tab icon={BuildingOffice2Icon}>Experience</Tab>;
}

function ProfessionalExperience() {
  return (
    <Card className="mt-5">
      <Title>Professional experience</Title>
      <Table className="mt-5">
        <TableHead>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Company</TableHeaderCell>
          <TableHeaderCell>Date start</TableHeaderCell>
          <TableHeaderCell>Date end</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
        </TableHead>
        <TableBody>
          {experiences.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Text>{item.role}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  <a
                    href={item.companyUrl}
                    title={item.company}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    {item.company}
                  </a>
                </Text>
              </TableCell>
              <TableCell>
                <Text>{dayjs(item.startDate).format("YYYY/MM")}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  {item.endDate ? dayjs(item.endDate).format("YYYY/MM") : "-"}
                </Text>
              </TableCell>
              <TableCell>
                <Text>
                  <Link href="#">Details</Link>
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

/*function ToyProjects() {
  return (
    <Card className="mt-5">
      <Title>Toy projects</Title>
      <Table className="mt-5">
        <TableHead>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Company</TableHeaderCell>
          <TableHeaderCell>Date start</TableHeaderCell>
          <TableHeaderCell>Date end</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
        </TableHead>
        <TableBody>
          {experiences.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Text>{item.role}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  <a
                    href={item.companyUrl}
                    title={item.company}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    {item.company}
                  </a>
                </Text>
              </TableCell>
              <TableCell>
                <Text>{dayjs(item.startDate).format("YYYY/MM")}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  {item.endDate ? dayjs(item.endDate).format("YYYY/MM") : "-"}
                </Text>
              </TableCell>
              <TableCell>
                <Text>
                  <Link href="#">Details</Link>
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}*/

export function ExperiencePanel() {
  return (
    <TabPanel>
      <ProfessionalExperience />
      {/*<ToyProjects />*/}
    </TabPanel>
  );
}
