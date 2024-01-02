import {Box, Divider, Heading} from "@chakra-ui/react";
import * as React from "react";
import BudgetForm from "./BudgetForm";
import BudgetItem from "./BudgetItem";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useLoaderData} from "react-router-dom";

//TODO: Add dynamic stat trackers at the top of the page for: total budgeted, remaining, spent so far.

export const budgetLoader = () => {
  const budgetData: object[] = fetchLocalStorageData("Budget");
  console.log("this is our budget:", budgetData);
  return {budgetData};
};

export const budgetAction = async ({request}) => {
  const data = await request.formData();
  const budgetItem = {
    category: data.get("category"),
    amount: data.get("amount"),
  };

  const localStorageBudget = fetchLocalStorageData("Budget");
  console.log("ls budget:", localStorageBudget);

  if (Object.keys(localStorageBudget).length === 0) {
    localStorage.setItem("Budget", JSON.stringify([budgetItem]));
  } else {
    const updatedBudget = JSON.parse(localStorage.getItem("Budget"));
    console.log("updatedBudget", updatedBudget);
    localStorage.setItem(
      "Budget",
      JSON.stringify([budgetItem, ...updatedBudget]),
    );
  }

  return data;
};

const Budget: React.FC = () => {
  const {budgetData} = useLoaderData();
  const [budget, setBudget] = React.useState<Array<object>>([]);
  // setBudget(budgetData);

  React.useEffect(() => {
    setBudget(budgetData);
  });
  return (
    <>
      <Box width={500} m={10}>
        <BudgetForm />
      </Box>

      <Divider />

      <BudgetItem budgetData={budget} />
    </>
  );
};

export default Budget;
