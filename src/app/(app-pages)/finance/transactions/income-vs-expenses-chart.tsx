"use client";
import React, { useState, useEffect, useRef } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { TransactionType } from "@/app/(app-pages)/finance/types";
import { format } from 'date-fns'; // Assuming you can use date-fns for date formatting

interface IncomeVsExpensesChartProps {
  transactions: TransactionType[];
}

export default function IncomeVsExpensesChart({ transactions }: IncomeVsExpensesChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (chartContainerRef.current) {
        setChartSize({
          width: chartContainerRef.current.offsetWidth,
          height: chartContainerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial size update

    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty array ensures this effect runs only once on mount

  const getWeek = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  // Function to get the first day of a given week number
  const getFirstDayOfWeek = (year, weekNumber) => {
    const janFirst = new Date(year, 0, 1);
    const daysOffset = (weekNumber - 1) * 7 - janFirst.getDay() + 1;
    return new Date(janFirst.setDate(daysOffset));
  };

  // Process transactions to aggregate data by week and format dates
  const processData = (transactions: TransactionType[]) => {
    const weeklyTotals = transactions.reduce((acc, { amount, timestamp }) => {
      const date = new Date(timestamp);
      const week = getWeek(date);
      if (!acc[week]) {
        acc[week] = { income: 0, expense: 0, startDate: getFirstDayOfWeek(date.getFullYear(), week) };
      }
      if (amount > 0) {
        acc[week].income += amount;
      } else {
        acc[week].expense += amount;
      }
      return acc;
    }, {});

    const weeks = Object.keys(weeklyTotals).map(Number).sort((a, b) => a - b);
    const incomeData = weeks.map(week => weeklyTotals[week].income);
    const expenseData = weeks.map(week => weeklyTotals[week].expense);
    const balanceData = weeks.map(week => weeklyTotals[week].income + weeklyTotals[week].expense); // Calculate balance
    const xLabels = weeks.map(week => format(weeklyTotals[week].startDate, 'MMM d')); // 'MMM d' formats to 'Jan 1'

    return { weeks, incomeData, expenseData, balanceData, xLabels };
  };

  const { weeks, incomeData, expenseData, balanceData, xLabels } = processData(transactions);

  return (
  <div className="overflow-hidden bg-white shadow sm:rounded-lg flex flex-col">
    <div className="px-4 py-5 sm:p-6 min-h-96 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900">Income vs. Expenses</h2>
      <p className="mt-2 text-sm text-gray-700">
        See how your income and expenses have changed over time.
      </p>
      <div className="flex-grow" ref={chartContainerRef}>
        {chartSize.width > 0 && (
          <LineChart
            xAxis={[{scaleType: 'point', data: xLabels}]} // Updated to use xLabels
            series={[
              {
                label: 'Total Income',
                data: incomeData,
              },
              {
                label: 'Total Expenses',
                data: expenseData.map(value => Math.abs(value)),
              },
              {
                label: 'Balance',
                data: balanceData,
              },
            ]}
            width={chartSize.width}
            height={chartSize.height}
            slotProps={{legend: {hidden: true}}}
          />
        )}
      </div>
    </div>
  </div>
  );
};
