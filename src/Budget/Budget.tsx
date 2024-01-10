import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import BudgetForm from "./BudgetForm";
import BudgetItemCard from "./BudgetItemCard";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useActionData, useFetcher, useLoaderData} from "react-router-dom";
import {BudgetItem} from "../Types";

//TODO: Add dynamic stat trackers at the top of the page for: total budgeted, remaining, spent so far.

export const budgetLoader = () => {
  const budgetData: Array<BudgetItem> = fetchLocalStorageData("Budget");
  console.log("budgetLoader data:", budgetData);
  return budgetData;
};

//* Handles the form submissions and updates local storage
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

  return budgetItem;
};

const Budget: React.FC = () => {
  const budgetData = useLoaderData() as Array<BudgetItem>;
  const actionData = useActionData() as BudgetItem;
  const [budget, setBudget] = React.useState<Array<BudgetItem>>(budgetData);
  // setBudget(budgetData);

  React.useEffect(() => {
    console.log("actionData", actionData);
    //* When the form is submitted, use the action data to update state
    //! Known bug - hot reload will keep updating state with the previous value. Not major enough to fix right now.
    if (actionData && actionData.category.length > 0) {
      setBudget([...budget, actionData]);
    }
  }, [actionData]);

  const removeItem = (category: string): void => {
    const currentBudgetItems: BudgetItem[] = fetchLocalStorageData("Budget");
    console.log("item to delete:", category);
    console.log("budget items before removal:", currentBudgetItems);

    const filteredBudgetItems = currentBudgetItems.filter(
      budgetItem => budgetItem.category !== category,
    );
    console.log("budget items after removal:", filteredBudgetItems);

    localStorage.setItem("Budget", JSON.stringify(filteredBudgetItems));
    setBudget(filteredBudgetItems);
  };

  return (
    <>
      <Box width={500} m={10}>
        <BudgetForm />
      </Box>

      <Divider />

      <Center justifyContent={"space-around"} m={"auto"} mt={2}>
        <Heading>Variable</Heading>
        <Heading>Fixed</Heading>
      </Center>
      <Center justifyContent={"space-evenly"} width='auto' height={'500'} overflowY='scroll' p={10}>
        <Flex direction='column' justifyContent='space-evenly' align='center' gap={6} margin='auto'>
          <BudgetItemCard budgetData={budget} removeItem={removeItem} />
        </Flex>
        <Divider orientation="vertical" />
          <Flex direction='column' justifyContent='space-evenly' align='center' gap={6} margin='auto'>
              <BudgetItemCard budgetData={budget} removeItem={removeItem}/>
          </Flex>
      </Center>
    </>
  );
};

export default Budget;
