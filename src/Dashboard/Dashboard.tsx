import React from "react";
import PieChart from "./PieChart";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useLoaderData} from "react-router-dom";
import {
  calculateIncome,
  calculateSpending,
  filterObjectsByDateRange,
  formatTransactionData,
  summarizeTransactionData,
} from "../Helpers/DashboardHelpers";
import {Transaction} from "plaid";
import {
  Box,
  Button,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
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
  const [spendingSummary, setSpendingSummary] = React.useState<number>(0);
  const [incomeSummary, setIncomeSummary] = React.useState<number>(0);

  //* When the page loads, use the loader data to initialize state
  React.useEffect(() => {
    setPieData(summarizedTransactionData);
    setTransactions(transactionData);
    setIncomeSummary(calculateIncome(transactionData));
    setSpendingSummary(calculateSpending(transactionData));
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

  //* Resets state back to its initial state
  const resetFilter = () => {
    setTransactions(transactionData);
    setPieData(summarizedTransactionData);
  };

  return (
    <>
      <Box display={"flex"}>
        <Box m={4} width={300}>
          <DateRangePicker
            onDateChange={filterTransactions}
            onReset={resetFilter}
          />
        </Box>

        <Box m={4}>
          <StatGroup gap={30} width={'400'} textColor={"black"}>
            <Stat p={4} bgColor={"green.100"} borderRadius={12}>
              <StatLabel>
                <Text fontSize={16}>Income</Text>
              </StatLabel>
              <StatNumber>${incomeSummary}</StatNumber>
              <StatHelpText fontSize={16}>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat p={4} bgColor={"red.100"} borderRadius={12}>
              <StatLabel>
                <Text fontSize={16}>Spending</Text>
              </StatLabel>
              <StatNumber> ${spendingSummary}</StatNumber>
              <StatHelpText fontSize={16}>
                <StatArrow type="decrease" />
                19.31%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Box>

      <Box width={"80%"}>
        <PieChart data={pieData} />
      </Box>
    </>
  );
};

export default Dashboard;
