"use client";
import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { TransactionType } from "@/app/(app-pages)/finance/types";

interface TransactionsChartProps {
  transactions: TransactionType[];
}

export default function TransactionsChart({ transactions }: TransactionsChartProps) {
  const [viewType, setViewType] = useState<'Income' | 'Expense'>('Income');

  const filteredTransactions = transactions.filter(transaction =>
    viewType === 'Income' ? transaction.amount > 0 : transaction.amount < 0
  );

  const aggregatedData = filteredTransactions.reduce((acc, { category, amount }) => {
    const existing = acc.find(item => item.label === category);
    if (existing) {
      existing.value += Math.abs(amount);
    } else {
      acc.push({ label: category, value: Math.abs(amount) });
    }
    return acc;
  }, [] as { label: string; value: number }[]);

  const chartData = aggregatedData.map(({ label, value }, index) => ({
    id: index,
    value,
    label
  }));

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="flex justify-between px-4 py-5 sm:p-6">
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setViewType('Income')}
        >
          Incomes
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-700"
          onClick={() => setViewType('Expense')}
        >
          Expenses
        </button>
      </div>
      <div className="px-4 py-5 sm:p-6 h-72">
        <PieChart
          series={[
            {
              data: chartData,
              paddingAngle: 2,
              innerRadius: 72,
              outerRadius: 120,
            }
          ]}
          slotProps={{
            legend: { hidden: true },
          }}
        />
      </div>
    </div>
  );
}
