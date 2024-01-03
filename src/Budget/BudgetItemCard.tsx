import {Box, Card, CardBody, Progress, Text} from "@chakra-ui/react";
import React from "react";
import { BudgetItem } from "../Types";
import { DeleteIcon } from "@chakra-ui/icons";



interface BudgetItemCardProps {
  budgetData: Array<BudgetItem>
  removeItem: (category: string) => void
}

//TODO: Add an accordion inside of the card to show which items contributed to the progress bar

const BudgetItemCard: React.FC<BudgetItemCardProps> = ({ budgetData, removeItem }) => {
  
  // const [budgetItems, setBudgetItems] = React.useState<Array<BudgetItemData>>(budgetData);

  // React.useEffect(() => {
  //   setBudgetItems(budgetData)
  // })


  const removeBudgetItem = (category: string) => {
    removeItem(category)
  }
  return (
    <>
      {budgetData.length > 0 && budgetData.map((item, i) => {
        return (
          <Card key={i} w={800} m={10}>
            <CardBody>
              <Box display={"flex"} flexDir={"row"}>
                <DeleteIcon color={'red.400'} mr={2} mt={1} onClick={() => removeBudgetItem(item.category)}/>
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

export default BudgetItemCard;
