import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import {Transaction} from "plaid";
import {useColorMode} from "@chakra-ui/color-mode";

interface Props {
  transactions?: Transaction[];
}

const TransactionsGrid: React.FC<Props> = ({transactions}) => {
  const { colorMode } = useColorMode();
  let gridTheme = colorMode === 'light' ? 'ag-theme-quartz' : 'ag-theme-quartz-dark'

  const columns: object[] = [
    {field: "Date"},
    {field: "Description"},
    {field: "Amount"},
    {field: "Category"},
  ];

  const transactionData = transactions?.map(transaction => {
    return {
      Date: transaction.date,
      Description: transaction.name,
      Amount: transaction.amount,
      Category: transaction.category?.toString(),
    };
  });

  return (
    <div className={gridTheme} style={{height: 500, width: "auto"}}>
      <AgGridReact rowData={transactionData} columnDefs={columns} />
    </div>
  );
};

export default TransactionsGrid;
