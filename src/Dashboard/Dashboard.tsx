import React from "react";
import PieChart from "./PieChart";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useLoaderData} from "react-router-dom";
import {
  filterObjectsByDateRange,
  formatTransactionData,
  summarizeTransactionData,
} from "../Helpers/DashboardHelpers";
import {Transaction} from "plaid";
import { Button } from "@chakra-ui/react";
import DateInput from "./DateRangePicker";
import DateRangePicker from "./DateRangePicker";

//* loader
export const dashboardLoader = (): object => {
  const transactionData = fetchLocalStorageData("Transaction Data");
  //* Format and summarize the transaction data to be usable by the piechart
  const formattedTransactionData = formatTransactionData(transactionData);
  const summarizedTransactionData = summarizeTransactionData(
    formattedTransactionData,
  );
  return {transactionData, summarizedTransactionData};
};

const Dashboard: React.FC = () => {
  const {summarizedTransactionData, transactionData} = useLoaderData();
  const [pieData, setPieData] = React.useState<Array<object>>([{}]);
  const [transactions, setTransactions] = React.useState<Array<Transaction>>(
    [],
  );
  console.log("dashboardLoader data:", summarizedTransactionData);

  React.useEffect(() => {
    setPieData(summarizedTransactionData);
    setTransactions(transactionData);
  }, []);

  const filterTransactions = (startDateString: string, endDateString: string) => {
    const startDate = new Date(startDateString)
    const endDate = new Date(endDateString)
    const data = transactions;

    const filteredData = filterObjectsByDateRange(data, startDate, endDate);
    console.log(filteredData);
    setTransactions(filteredData)
    const updatedPie = summarizeTransactionData(formatTransactionData(filteredData))
    setPieData(updatedPie);
  };


  return (
    <>
      <h1>Dashboard</h1>
      {/* <Button onClick={() => filterTransactions(transactions)}>Filter Transactions</Button> */}
      <DateRangePicker onDateChange={filterTransactions}/>
      <PieChart data={pieData} />
    </>
  );
};

export default Dashboard;
