/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import 'tailwindcss/tailwind.css';

const ShiftCalendar = () => {
  const shifts = [
    {
      date: '2024-07-10',
      time: '09:00 - 17:00',
      location: '123 Main St, Springfield',
      job: 'House Cleaning',
    },
    {
      date: '2024-07-12',
      time: '13:00 - 21:00',
      location: '456 Elm St, Springfield',
      job: 'Office Cleaning',
    },
    // Add more shifts here
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [shiftDetails, setShiftDetails] = useState(null);

  const onDateClick = (day) => {
    setSelectedDate(day);
    const selectedDateString = day.toISOString().split('T')[0];
    const shiftOnSelectedDate = shifts.find(
      (shift) => shift.date === selectedDateString
    );
    setShiftDetails(shiftOnSelectedDate);
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
    const dateFormat = "EEE"; // "EEE" formats the day name to short form (e.g., "Mon", "Tue")
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
        const dateString = day.toISOString().split('T')[0];
        const isShiftDate = shifts.some(shift => shift.date === dateString);
        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart) ? "text-gray-400" : "text-gray-900"} ${isSameDay(day, new Date()) ? "bg-blue-500 text-white" : ""} ${isSameDay(day, selectedDate) ? "bg-blue-200" : ""} ${isShiftDate ? "border border-blue-500" : ""}`}
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

  const renderSelectedShiftDetails = () => {
    return (
      <div className="mt-1">
        {shiftDetails ? (
          <div className="mt-6 bg-blue-100 p-4 rounded-md shadow-inner">
            <h3 className="text-xl font-semibold mb-2">Shift Details</h3>
            <p><strong>Date:</strong> {new Date(shiftDetails.date).toDateString()}</p>
            <p><strong>Time:</strong> {shiftDetails.time}</p>
            <p><strong>Location:</strong> {shiftDetails.location}</p>
            <p><strong>Job:</strong> {shiftDetails.job}</p>
          </div>
        ) : (
          <div className="mt-6 bg-red-100 p-4 rounded-md shadow-inner">
            <p>No shifts available on this date.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Shift Calendar</h2>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
        {renderSelectedShiftDetails()}
      </div>
    </div>
  );
};

export default ShiftCalendar;
