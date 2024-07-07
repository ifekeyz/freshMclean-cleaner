/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import 'tailwindcss/tailwind.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const onDateClick = (day) => {
    const dateExists = selectedDates.some(selectedDate => isSameDay(selectedDate, day));
    const newSelectedDates = dateExists 
      ? selectedDates.filter(selectedDate => !isSameDay(selectedDate, day))
      : [...selectedDates, day];

    setSelectedDates(newSelectedDates);
    console.log(newSelectedDates);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center py-2">
        <div className="cursor-pointer" onClick={prevMonth}>
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div>
          <span className="text-lg font-semibold">{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="cursor-pointer" onClick={nextMonth}>
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center text-gray-500" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart) ? "text-gray-400" : "text-gray-900"} ${isSameDay(day, new Date()) ? "bg-blue-500 text-white" : ""} ${selectedDates.some(selectedDate => isSameDay(selectedDate, day)) ? "bg-blue-200" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="block w-full">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const renderSelectedDates = () => {
    return (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Selected Dates:</h2>
        <ul className="list-disc list-inside mt-2">
          {selectedDates.map((date, index) => (
            <li key={index}>{format(date, 'dd/MM/yyyy')}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-lg shadow p-4">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
        {renderSelectedDates()}
      </div>
    </div>
  );
};

export default Calendar;
