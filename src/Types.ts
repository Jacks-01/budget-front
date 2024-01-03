//* a single item that gets added when the budget form is submitted
export type BudgetItem = {
    category: string,
    amount: string
}

//* the format required for the data in the nivo pie chart
export type pieData = {
    id: string;
    label: string;
    value: number;
  };