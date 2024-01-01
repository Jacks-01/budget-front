import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import * as React from "react";

const Budget: React.FC = () => {
  return (
    <>
      <h1>Budgets Page</h1>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Budget;
