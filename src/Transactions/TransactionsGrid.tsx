import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import {Transaction} from "plaid";

interface Props {
  transactions?: Transaction[];
}

const TransactionsGrid: React.FC<Props> = ({transactions}) => {
  // const [columns, setColumns] = useState([
  //     { field: 'Date' },
  //     { field: 'Description' },
  //     { field: 'Amount' }
  // ]);

  const columns: object[] = [
    {field: "Date"},
    {field: "Description"},
    {field: "Amount"},
  ];
  const transactionData = transactions?.map(transaction => {
    return {
      Date: transaction.date,
      Description: transaction.name,
      Amount: transaction.amount.toString(),
    };
  });
    
  return (
    <div className="ag-theme-quartz" style={{height: 500, width: 'auto'}}>
      <AgGridReact rowData={transactionData} columnDefs={columns} />
    </div>
  );
};

export default TransactionsGrid;
