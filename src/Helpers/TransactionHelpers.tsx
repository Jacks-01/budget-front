// import { Transaction } from "plaid";

export const fetchLocalStorageTransactions = (key: string) => {
    const data: string | null = localStorage.getItem(key);
  
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData;
    }
  
    //* If there is no data, return an empty object
    return {};
  };
  