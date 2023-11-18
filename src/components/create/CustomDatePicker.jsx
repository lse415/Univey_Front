import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

const CustomDatePicker = ({ selectedDate, handleChange }) => {
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  };

  const isSameMonth = (date, currentDate) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="w-full mb-3">
      <DatePicker
        calendarClassName="text-white"
        selectedClassName="bg-holiday"
        dayClassName={(date) =>
          isWeekend(date)
            ? "text-blue-500"
            : isSameMonth(date, new Date())
            ? isToday(date)
              ? "text-white"
              : "text-text_color"
            : "text-gray-400"
        }
        dateFormat="yyyy-MM-dd"
        placeholderText="YY/MM/DD"
        shouldCloseOnSelect
        minDate={new Date()}
        maxDate={null}
        selected={selectedDate}
        calendarStartDay={1}
        onChange={(date) => {
          handleChange(date);
        }}
        showIcon
        customInput={
          <input
            className="w-full border-b border-gray-300 focus:outline-none text-sub_text_color"
            type="text"
            value={selectedDate ? selectedDate : ""}
            readOnly
          />
        }
        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="bg-main_color text-white p-2 flex items-center justify-center">
            <button
              className="mr-2"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <div>{date.toLocaleDateString("en-US", { month: "numeric" })}월</div>
            <button
              className="ml-2"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
        calendarContainer={({ className, children }) => (
          <div className={`bg-white ${className}`}>
            {children}
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
