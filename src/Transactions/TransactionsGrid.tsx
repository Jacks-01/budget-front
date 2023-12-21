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
  const gridTheme = colorMode === 'light' ? 'ag-theme-quartz' : 'ag-theme-quartz-dark'

  const columns: object[] = [
    {field: "Date"},
    {field: "Description", flex: 3},
    {field: "Amount", flex: 1},
    {field: "Category", flex: 1},
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
    <div className={gridTheme} style={{height: '525px', width: "auto"}}>
      <AgGridReact rowData={transactionData} columnDefs={columns}/>
    </div>
  );
};

export default TransactionsGrid;
