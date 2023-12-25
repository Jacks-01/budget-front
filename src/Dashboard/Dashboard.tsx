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
import {Box, Button} from "@chakra-ui/react";
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
  //* Loader Data
  const {summarizedTransactionData, transactionData} = useLoaderData();

  //* State - Mutable. Change this to affect data on the dashboard
  const [pieData, setPieData] = React.useState<Array<object>>([{}]);
  const [transactions, setTransactions] = React.useState<Array<Transaction>>(
    [],
  );

  //* When the page loads, use the loader data to initialize state
  React.useEffect(() => {
    setPieData(summarizedTransactionData);
    setTransactions(transactionData);
  }, []);

  //* Filters the transaction data, then reformats and summarizes
  const filterTransactions = (
    startDateString: string,
    endDateString: string,
  ) => {
    //* Convert our date strings to date objects
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const data = transactionData;

    const filteredData = filterObjectsByDateRange(data, startDate, endDate);
    setTransactions(filteredData);
    const updatedPie = summarizeTransactionData(
      formatTransactionData(filteredData),
    );
    setPieData(updatedPie);
  };

  //* Resets state back to its initial data
  const resetFilter = () => {
    setTransactions(transactionData);
    setPieData(summarizedTransactionData);
  };

  return (
    <>
      <Box m={4} width={300}>
        <DateRangePicker onDateChange={filterTransactions} onReset={resetFilter}/>
      </Box>
      <PieChart data={pieData} />
    </>
  );
};

export default Dashboard;
