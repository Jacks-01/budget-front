import {Button, Input} from "@chakra-ui/react";
import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
  onDateChange: (startDate: string, endDate: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({onDateChange}) => {
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");

  const handleDateChange = () => {
    if (startDate && endDate) {
      onDateChange(startDate, endDate);
    }
  };
  return (
    <>
      <Input
        onChange={e => {
          setStartDate(e.target.value);
        }}
        value={startDate}
        placeholder="start date"
        type="date"
        name="startDate"
        size="md"
      />
      <Input
        onChange={e => {
          setEndDate(e.target.value);
        }}
        value={endDate}
        type="date"
        placeholder="end date"
        name="endDate"
        size="md"
      />
      <Button onClick={handleDateChange}>Filter Transactions</Button>
    </>
  );
};

export default DateRangePicker;
