import { TabGroup, TabList, TabPanels } from "@tremor/react";
import { Experience, ExperiencePanel } from "@/app/tabs/experience";
import { TechSkills, TechSkillsPanel } from "@/app/tabs/tech-skills";
import { PersonalSkillsPanel, PersonSkills } from "@/app/tabs/person-skills";
import { About, AboutPanel } from "@/app/tabs/about";
import {
  EducationTraining,
  EducationTrainingPanel,
} from "@/app/tabs/education-training";

export default function Home() {
  return (
    <main>
      <TabGroup>
        <TabList>
          <Experience />
          <TechSkills />
          <PersonSkills />
          <EducationTraining />
          <About />
        </TabList>
        <TabPanels>
          <ExperiencePanel />
          <TechSkillsPanel />
          <PersonalSkillsPanel />
          <EducationTrainingPanel />
          <AboutPanel />
        </TabPanels>
      </TabGroup>
    </main>
  );
}
