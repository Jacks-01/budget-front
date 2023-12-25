import { RepeatIcon } from "@chakra-ui/icons";
import {Box, Button, Input} from "@chakra-ui/react";
import * as React from "react";

interface DateRangePickerProps {
  onDateChange: (startDate: string, endDate: string) => void;
  onReset: () => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateChange,
  onReset,
}) => {
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");

  const handleDateChange = () => {
    if (startDate && endDate) {
      onDateChange(startDate, endDate);
    }
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box p={2}>
          <Input
            onChange={e => {
              setStartDate(e.target.value);
            }}
            value={startDate}
            placeholder="start date"
            type="date"
            name="startDate"
            size="md"
            outlineColor={"green.200"}
          />
        </Box>
        <Box p={2}>
          <Input
            onChange={e => {
              setEndDate(e.target.value);
            }}
            value={endDate}
            type="date"
            placeholder="end date"
            name="endDate"
            size="md"
            outlineColor={"green.200"}
          />
        </Box>
      </Box>

      <Box display={'flex'}>
        <Box p={2}>
          <Button
            onClick={handleDateChange}
            variant={"solid"}
            colorScheme={"green"}>
            Filter Transactions
          </Button>
        </Box>
        <Box p={2}>
          <Button onClick={onReset} variant={"solid"} colorScheme={"green"}>
            <RepeatIcon/>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DateRangePicker;
