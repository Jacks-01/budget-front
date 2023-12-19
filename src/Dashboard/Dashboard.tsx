import React from "react";
import PieChart from "./PieChart";
import {fetchLocalStorageData} from "../Helpers/Helpers";
import {useLoaderData} from "react-router-dom";
import {
  formatTransactionData,
  summarizeTransactionData,
} from "../Helpers/DashboardHelpers";

//* loader
export const dashboardLoader = (): object => {
  const transactionData = fetchLocalStorageData("Transaction Data");
  //* Format and summarize the transaction data to be usable by the piechart
  const formattedTransactionData = formatTransactionData(transactionData);
  const summarizedTransactionData = summarizeTransactionData(
    formattedTransactionData,
  );
  return summarizedTransactionData;
};

const Dashboard: React.FC = () => {
  const summarizedTransactionData = useLoaderData() as Array<object>;
  const [pieData, setPieData] = React.useState<Array<object>>([{}]);
  console.log("dashboardLoader data:", summarizedTransactionData);

  React.useEffect(() => {
    setPieData(summarizedTransactionData);
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <PieChart data={pieData} />
    </>
  );
};

export default Dashboard;
