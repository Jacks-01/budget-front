import React, {useEffect} from "react";
import PieChart from "./PieChart";

const Dashboard: React.FC = () => {
  const [pieData, setPieData] = React.useState<Array<object>>([{}]);

  React.useEffect(() => {
    const localTransactions: string | null = localStorage.getItem("Trans Data");

    if (localTransactions) {
      const parsedTransactions = JSON.parse(localTransactions);
      const newPieData = parsedTransactions.map(element => {
        const data = {
          id: element.Category,
          label: element.Category,
          value: parseInt(element.Amount),
        };
        return data;
      });
      const summarizedPieData = summarizeData(newPieData);
      setPieData(summarizedPieData);
      return;
    }
  }, []);

  const summarizeData = (originalData: Array<object>, threshold = 1): Array<object> => {
    const summarizedData: object[] = [];

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

    // Filter out entries below the threshold
    dataMap.forEach((value, label) => {
      if (value >= threshold) {
        summarizedData.push({id: label, label, value});
      }
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
