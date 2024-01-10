import { Transaction } from "plaid";
import { pieData } from "../Types";



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

export const filterObjectsByDateRange = (data: Transaction[], startDate:Date , endDate:Date): Transaction[] => {
    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
}

export const calculateSpending = (transactions: Transaction[]): number => {

  //

  let spending: number = 0;

  transactions.forEach(transaction => {
   if (transaction.amount > 0) {
     spending -= Math.abs(transaction.amount);
   }
  });

  return spending

}
export const calculateIncome = (transactions: Transaction[]): number => {

  //
  
  let income: number = 0;

   transactions.forEach(transaction => {
    if (transaction.amount < 0) {
      income += Math.abs(transaction.amount);
    }
   });
  
  return income;

}