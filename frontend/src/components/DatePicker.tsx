import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  onChange: (date: Date) => void;
}

function CustomDatePicker({ onChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleChange = async (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}

export default CustomDatePicker;
