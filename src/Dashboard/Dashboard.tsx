import React, {useEffect} from "react";
import PieChart from "./PieChart";

const Dashboard: React.FC = () => {
  React.useEffect(() => {
    const localTransactions: string | null = localStorage.getItem("Trans Data");

    if (localTransactions) {
      const parsedTransactions = JSON.parse(localTransactions);
      setPieData(parsedTransactions);
      return;
    }
  }, []);

  const [pieData, setPieData] = React.useState<Array<object>>([{}]);
  return (
    <>
      <h1>Dashboard</h1>
      <PieChart data={pieData} />
    </>
  );
};

export default Dashboard;
