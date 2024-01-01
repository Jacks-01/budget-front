import {Box, Divider, Heading} from "@chakra-ui/react";
import * as React from "react";
import BudgetForm from "./BudgetForm";
import BudgetItem from "./BudgetItem";

//TODO: Add dynamic stat trackers at the top of the page for: total budgeted, remaining, spent so far.

const Budget: React.FC = () => {
  return (
    <>
      <Box width={500} m={10}>
        <BudgetForm />
      </Box>

      <Divider/>

      <BudgetItem/>

    </>
  );
};

export default Budget;
