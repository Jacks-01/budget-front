import React from "react";
import axios from "axios";
import {Transaction} from "plaid";
import {Button} from "@chakra-ui/button";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
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

  const rows = transactions.map(transaction => (
    <tr key={Math.random()}>
      <td>{transaction.date}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.name}</td>
    </tr>
  ));

  return (
    <>
      <h1>Transactions Start Here</h1>
      <Button onClick={() => getAllTransactions()}>get transactions</Button>

      <TableContainer>
        <Table variant="striped">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>{rows}</Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default Transactions;
