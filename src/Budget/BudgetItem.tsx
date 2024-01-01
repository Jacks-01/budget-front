import {Tabs, TabList, Tab, TabPanels, TabPanel} from "@chakra-ui/react";
import React from "react";

interface BudgetItemProps { }

//TODO: Create a foreach loop to generate tabs dynamically based on each budget type (personal, bills, etc)


const BudgetItem: React.FC<BudgetItemProps> = () => {
  return (
    <>
      <h1>This is a budget item</h1>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Bills</Tab>
          <Tab>Subscriptions</Tab>
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

export default BudgetItem;
