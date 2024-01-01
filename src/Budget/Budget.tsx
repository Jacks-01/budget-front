import {Box, Heading} from "@chakra-ui/react";
import * as React from "react";
import BudgetForm from "./BudgetForm";

//TODO: Add dynamic stat trackers at the top of the page for: total budgeted, remaining, spent so far.

const Budget: React.FC = () => {
  return (
    <>
      <Heading m={5}>Add spending categories to your budget!</Heading>

      <Box width={500} m={10}>
        <BudgetForm />
      </Box>
    </>
  );
};

export default Budget;
