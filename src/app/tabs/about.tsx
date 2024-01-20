"use client";
import { Card, Tab, TabPanel, Text } from "@tremor/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";

export function About() {
  return <Tab icon={UserCircleIcon}>About</Tab>;
}

export function AboutPanel() {
  return (
    <TabPanel>
      <Card className="mt-5">
        <Text>
          I felt in love with programming writing my first routines in Ada and
          since then it stay in me the custom of the explicit, the descriptive,
          and the efficient ways. I'm more interested in knowing the whys and
          whats before the hows that's why when I lay my hands on the keyboard I
          already have a clear objective of what I want to accomplish.
        </Text>
      </Card>
    </TabPanel>
  );
}
