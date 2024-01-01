import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {Form} from "react-router-dom";

interface BudgetFormProps { }

//TODO: Add a success alert when a new category is submitted

//TODO: Submit the form data to local storage

const BudgetForm: React.FC<BudgetFormProps> = () => {
  return (
    <>
      <Heading as={"h2"} size={"lg"} mb={4}>
        Add a new item
      </Heading>

      <Form method="post">
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input type="text" name="category" />
          <FormHelperText>ex. Groceries, Pet, Home Improvement</FormHelperText>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Amount</FormLabel>
          <Input type="number" placeholder="$0.00" name="amount" />
        </FormControl>

        <Button type="submit" variant={"outline"} colorScheme="green" mt={8}>
          Add
        </Button>
      </Form>
    </>
  );
};

export default BudgetForm;
