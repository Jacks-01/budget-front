import { Transaction } from "plaid";

type pieData = {
  id: string;
  label: string;
  value: number;
};

export const formatTransactionData = (data: Array<Transaction>): Array<pieData> => {
  const formattedTransactions = data.map((transaction: Transaction) => {
    const data: pieData = {
      id: transaction.category[0],
      label: transaction.category[0],
      value: Math.round(transaction.amount),
    };
    return data;
  });
  return formattedTransactions;
};

export const summarizeTransactionData = (
  originalData: Array<pieData>,
): Array<object> => {
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

export const filterObjectsByDateRange = (data: Array<Transaction>, startDate:Date , endDate:Date) => {
    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  }