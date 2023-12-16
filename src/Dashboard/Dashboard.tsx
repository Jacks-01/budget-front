import React from "react";
import PieChart from "./PieChart";
import {Transaction} from "plaid";

const Dashboard: React.FC = () => {
  const [pieData, setPieData] = React.useState<Array<object>>([{}]);

  type pieData = {
    id: string;
    label: string;
    value: number;
  };

  React.useEffect(() => {
    const localTransactions: string | null =
      localStorage.getItem("Transaction Data");

    if (localTransactions) {
      const parsedTransactions = JSON.parse(localTransactions);
      const formattedTransactions = parsedTransactions.map(
        (transaction: Transaction) => {
          const data: pieData = {
            id: transaction.category[0],
            label: transaction.category[0],
            value: transaction.amount,
          };
          return data;
        },
      );

      const summarizedPieData = summarizeData(formattedTransactions);
      setPieData(summarizedPieData);
      return;
    }
  }, []);

  const summarizeData = (originalData: Array<pieData>): Array<object> => {
    const summarizedData: pieData[] = [];

    // Create a map to aggregate values by label
    const dataMap = new Map();

    originalData.forEach(entry => {
      const {label, value} = entry;

      if (dataMap.has(label)) {
        dataMap.set(label, dataMap.get(label) + value);
      } else {
        dataMap.set(label, value);
      }
    });

    // Push the map entries to the summary array
    dataMap.forEach((value, label) => {
      summarizedData.push({id: label, label, value});
    });

    return summarizedData;
  };
  return (
    <>
      <h1>Dashboard</h1>
      <PieChart data={pieData} />
    </>
  );
};

export default Dashboard;
