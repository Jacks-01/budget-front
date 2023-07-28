import React from "react";
import axios from "axios";
import {
  Button,
  Table,
  Box,
  SpaceBetween,
  Header,
} from "@cloudscape-design/components";

import {Transaction} from "plaid";
const SERVER = import.meta.env.VITE_SERVER;

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = React.useState<Array<Transaction>>(
    [],
  );

  // React.useEffect(() => {
  // }, [])

  const getAllTransactions = async () => {
    const localTransactions: string | null =
      localStorage.getItem("Transaction Data");

    if (localTransactions) {
      const parsedTransactions: Array<Transaction> =
        JSON.parse(localTransactions);
      setTransactions(parsedTransactions);
      return;
    }

    const response = await axios.get(`${SERVER}/transactions/get`);
    console.log("transactions yo:", response.data);
    setTransactions(response.data);
    localStorage.setItem("Transaction Data", JSON.stringify(response.data));
  };

  return (
    <>
      <h1>Transactions Start Here</h1>
      <Button onClick={() => getAllTransactions()}>get transactions</Button>

      <Table
        columnDefinitions={[
          {
            id: "date",
            header: "Date",
            cell: item => item.date || "-",
            sortingField: "name",
            isRowHeader: true,
          },
          {
            id: "amount",
            header: "Amount",
            cell: item => item.amount || "-",
            sortingField: "amount",
          },
          {
            id: "description",
            header: "Description",
            cell: item => item.name || "-",
          },
        ]}
        items={transactions}
        loadingText="Loading resources"
        sortingDisabled
        empty={
          <Box margin={{vertical: "xs"}} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Create resource</Button>
            </SpaceBetween>
          </Box>
        }
        header={<Header> Simple table </Header>}
      />
    </>
  );
};

export default Transactions;
