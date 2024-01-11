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

  //* calls the API manually to refresh transaction data
  const forceRefreshTransactions = async () => {
    const response = await axios.get(`${SERVER}/transactions/get`);
    console.log("transactions returned from the server:", response.data);
    setTransactions(response.data);
    localStorage.setItem("Transaction Data", JSON.stringify(response.data));
  };

  return (
    <>
      <h1>Transactions Page</h1>
      <Button onClick={() => forceRefreshTransactions()}>
        get transactions
      </Button>
      {transactionData.length > 0 && (
        <TransactionsGrid transactions={transactionData} />
      )}
    </>
  );
};

export default Transactions;
