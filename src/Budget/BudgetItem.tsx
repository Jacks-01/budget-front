import {Box, Card, CardBody, Progress, Text} from "@chakra-ui/react";
import React from "react";
import { BudgetItemData } from "../Types";



interface BudgetItemProps {
  budgetData: Array<BudgetItemData>
}

//TODO: Convert hardcoded values to props to dyanmically display the items from local storage.

//TODO: Add an accordion inside of the card to show which items contributed to the progress bar

const BudgetItem: React.FC<BudgetItemProps> = ({budgetData}) => {
  console.log('budget item data:', budgetData);
  return (
    <>
      {budgetData.length > 0 && budgetData.map((item, i) => {
        return (
          <Card key={i} w={800} m={10}>
            <CardBody>
              <Box display={"flex"} flexDir={"row"}>
                <Text>{item.category}</Text>
                <Text ml={"auto"}>{item.amount}</Text>
              </Box>
              <Progress
                mt={4}
                value={Math.floor(Math.random() * 20)}
                max={parseInt(item.amount)}
                colorScheme="green"
                hasStripe
                borderRadius={4}
              />
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default BudgetItem;
