"use client";
import { BarChart, Card, Col, Grid, Tab, TabPanel, Title } from "@tremor/react";
import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import {
  frameworks_libraries,
  programming_languages,
  spoken_languages,
  tools,
} from "@/data/expertise";

export function TechSkills() {
  return <Tab icon={WrenchScrewdriverIcon}>Tech skills</Tab>;
}

export function TechSkillsPanel() {
  return (
    <TabPanel>
      <Grid numItems={1} numItemsLg={2} className="gap-2.5 mt-5">
        <Col>
          <Frameworks />
        </Col>
        <Col>
          <ProgrammingLanguages />
        </Col>
        <Col>
          <Tools />
        </Col>
        <Col>
          <SpokenLanguages />
        </Col>
      </Grid>
    </TabPanel>
  );
}

function Frameworks() {
  return (
    <Card>
      <Title>Frameworks and Libraries</Title>
      <BarChart
        className="mt-6"
        data={frameworks_libraries}
        index="name"
        categories={["Master level"]}
        colors={["sky"]}
        yAxisWidth={48}
        showAnimation
      />
    </Card>
  );
}

function ProgrammingLanguages() {
  return (
    <Card>
      <Title>Programming languages</Title>
      <BarChart
        className="mt-6"
        data={programming_languages}
        index="name"
        categories={["Master level"]}
        colors={["amber"]}
        yAxisWidth={48}
        showAnimation
      />
    </Card>
  );
}

function Tools() {
  return (
    <Card>
      <Title>Tools</Title>
      <BarChart
        className="mt-6"
        data={tools}
        index="name"
        categories={["Master level"]}
        colors={["teal"]}
        yAxisWidth={48}
        showAnimation
      />
    </Card>
  );
}

function SpokenLanguages() {
  return (
    <Card>
      <Title>Spoken languages</Title>
      <BarChart
        className="mt-6"
        data={spoken_languages}
        index="name"
        categories={["Master level"]}
        colors={["violet"]}
        yAxisWidth={48}
        showAnimation
      />
    </Card>
  );
}
