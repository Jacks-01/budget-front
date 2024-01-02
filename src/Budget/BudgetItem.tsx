import {Box, Card, CardBody, Progress, Text} from "@chakra-ui/react";
import React from "react";

interface BudgetItemProps {
  budgetData: Array<object>;
}

//TODO: Convert hardcoded values to props to dyanmically display the items from local storage.

//TODO: Add an accordion inside of the card to show which items contributed to the progress bar

const BudgetItem: React.FC<BudgetItemProps> = ({budgetData}) => {
  console.log(budgetData);
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
      <Card w={800} m={10}>
        <CardBody>
          <Box display={"flex"} flexDir={"row"}>
            <Text>Pet</Text>
            <Text ml={"auto"}>$50.00</Text>
          </Box>
          <Progress
            mt={4}
            value={15}
            max={50}
            colorScheme="green"
            hasStripe
            borderRadius={4}
          />
        </CardBody>
      </Card>
      <Card w={800} m={10}>
        <CardBody>
          <Box display={"flex"} flexDir={"row"}>
            <Text>Home Improvement</Text>
            <Text ml={"auto"}>$150.00</Text>
          </Box>
          <Progress
            mt={4}
            value={120}
            max={150}
            colorScheme="green"
            hasStripe
            borderRadius={4}
          />
        </CardBody>
      </Card>
      {budgetData.map((item, i) => {
        return (
          <Card key={i} w={800} m={10}>
            <CardBody>
              <Box display={"flex"} flexDir={"row"}>
                <Text>Home Improvement</Text>
                <Text ml={"auto"}>item.amount
                </Text>
              </Box>
              <Progress
                mt={4}
                value={120}
                max={150}
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
