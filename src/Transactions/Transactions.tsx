import React from "react";
import axios from "axios";
import {Transaction} from "plaid";
import {Button} from "@chakra-ui/button";
import TransactionsGrid from "./TransactionsGrid";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useLoaderData} from "react-router-dom";
const SERVER = import.meta.env.VITE_SERVER;

export const transactionLoader = () => {
  const transactionData = fetchLocalStorageData("Transaction Data");
  return transactionData;
};

const Transactions: React.FC = () => {
  const transactionData = useLoaderData() as Array<Transaction>;
  const [transactions, setTransactions] = React.useState<Array<Transaction>>(
    [],
  );


  const getAllTransactions = async () => {
    const localTransactions: string | null =
      localStorage.getItem("Transaction Data");

    //* If there is transaction data in local storage, grab it
    if (localTransactions) {
      const parsedTransactions: Array<Transaction> =
        JSON.parse(localTransactions);
      setTransactions(parsedTransactions);
      return;
    }

    //* Otherwise make a request to the server, then stash it in local storage
    const response = await axios.get(`${SERVER}/transactions/get`);
    console.log("transactions yo:", response.data);
    setTransactions(response.data);
    localStorage.setItem("Transaction Data", JSON.stringify(response.data));
  };

  return (
    <>
      <h1>Transactions Page</h1>
      <Button onClick={() => getAllTransactions()}>get transactions</Button>

      <TransactionsGrid transactions={transactionData} />
    </>
  );
};

export default Transactions;
