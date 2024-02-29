"use client";
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Transaction } from './types'; // Importing Transaction interface from ./types

interface TransactionsChartProps {
  transactions: Transaction[];
}

const TransactionsChart = ({ transactions }: TransactionsChartProps) => {
  const [chartType, setChartType] = useState<'expense' | 'income'>('expense');

  // Aggregate transactions by category and sum the amounts
  const aggregatedTransactions = transactions.reduce((accumulator: Record<string, number>, transaction: Transaction) => {
    const category = transaction.category;
    const amount = transaction.amount;
    accumulator[category] = (accumulator[category] || 0) + amount;
    return accumulator;
  }, {});

  // Filter aggregated transactions based on chart type (expense or income)
  const filteredTransactions = Object.entries(aggregatedTransactions)
    .filter(([_, amount]) => chartType === 'expense' ? amount < 0 : amount > 0);

  const data = {
    labels: filteredTransactions.map(([category]) => category),
    datasets: [
      {
        data: filteredTransactions.map(([_, amount]) => Math.abs(amount)), // Take absolute value for display
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 w-full">
        <Doughnut data={data} />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-2 py-1 rounded-full ${chartType === 'expense' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500'}`}
          onClick={() => setChartType('expense')}
        >
          Expenses
        </button>
        <button
          className={`px-2 py-1 rounded-full ${chartType === 'income' ? 'bg-green-500 text-white' : 'text-green-500 border border-green-500'}`}
          onClick={() => setChartType('income')}
        >
          Incomes
        </button>
      </div>
    </div>
  );
};

export default TransactionsChart;
