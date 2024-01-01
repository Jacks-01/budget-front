import {Box, Card, CardBody, Progress, Text} from "@chakra-ui/react";
import React from "react";

interface BudgetItemProps { }

//TODO: Add an accordion inside of the card to show which items contributed to the progress bar

const BudgetItem: React.FC<BudgetItemProps> = () => {
  return (
    <>
      <Card w={800} m={10}>
        <CardBody>
          <Box display={"flex"} flexDir={"row"}>
            <Text>Groceries</Text>
            <Text ml={"auto"}>$200.00</Text>
          </Box>
          <Progress
            mt={4}
            value={100}
            max={200}
            colorScheme="green"
            hasStripe
            borderRadius={4}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default BudgetItem;
