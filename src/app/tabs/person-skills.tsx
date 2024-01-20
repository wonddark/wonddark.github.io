"use client";
import { BarList, Card, Tab, TabPanel } from "@tremor/react";
import { HeartIcon } from "@heroicons/react/16/solid";
import { character } from "@/data/character";

export function PersonSkills() {
  return <Tab icon={HeartIcon}>Character skills</Tab>;
}

export function PersonalSkillsPanel() {
  return (
    <TabPanel>
      <CharacterSkills />
    </TabPanel>
  );
}

function CharacterSkills() {
  return (
    <Card className="mt-5">
      <BarList data={character} showAnimation color="green" />
    </Card>
  );
}
