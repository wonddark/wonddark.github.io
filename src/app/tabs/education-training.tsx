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
  Title,
} from "@tremor/react";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import { education, training } from "@/data/education-training";

export function EducationTraining() {
  return <Tab icon={AcademicCapIcon}>Education and Training</Tab>;
}

export function EducationTrainingPanel() {
  return (
    <TabPanel>
      <Academy />
      <Training />
    </TabPanel>
  );
}

function Academy() {
  return (
    <Card className="mt-5">
      <Title>Academy</Title>
      <Table>
        <TableHead>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Year</TableHeaderCell>
          <TableHeaderCell>Institution</TableHeaderCell>
          <TableHeaderCell>City</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
        </TableHead>
        <TableBody>
          {education.map((item) => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.institution}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

function Training() {
  return (
    <Card className="mt-5">
      <Title>Training</Title>
      <Table>
        <TableHead>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Year</TableHeaderCell>
          <TableHeaderCell>Institution</TableHeaderCell>
          <TableHeaderCell>City</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
        </TableHead>
        <TableBody>
          {training.map((item) => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.institution}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
