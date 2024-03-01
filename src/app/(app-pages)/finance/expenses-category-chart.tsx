"use client";
import React, { useState, useEffect, useRef } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { TransactionType } from "@/app/(app-pages)/finance/types";
import {ArrowRightIcon} from "@heroicons/react/24/solid";

interface ExpensesCategoryChartProps {
  transactions: TransactionType[];
}

export default function ExpensesCategoryChart({ transactions }: ExpensesCategoryChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const [view, setView] = useState<'Expenses' | 'Income'>('Expenses'); // Track current view

  const toggleView = () => {
    setView(view === 'Expenses' ? 'Income' : 'Expenses');
  };

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
  }, []);

  const processData = (transactions: TransactionType[], view: 'Expenses' | 'Income') => {
    // Filter transactions based on view
    const filteredTransactions = transactions.filter(transaction =>
      view === 'Expenses' ? transaction.amount < 0 : transaction.amount > 0
    );

    const categoryTotals = filteredTransactions.reduce((acc, { category, amount }) => {
      const absAmount = Math.abs(amount);
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += absAmount;
      return acc;
    }, {});

    const total = Object.values(categoryTotals).reduce((acc, total) => acc + total, 0);

    const data = Object.entries(categoryTotals).map(([category, total]) => ({
      label: `${category} (${((total / total) * 100).toFixed(2)}%)`,
      value: total,
    }));

    return data;
  };

  const data = processData(transactions, view);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg flex flex-col">
      <div className="px-4 py-5 sm:p-6 min-h-96 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{view}</h2>
          <button
              onClick={toggleView}
              className="py-1 shadow-sm sm:rounded-lg"
              aria-label="Next"
          >
            <ArrowRightIcon className="h-6 w-6"/>
          </button>
        </div>
        <p className="mt-2 mb-5 sm:mb-6 text-sm text-gray-700">
          Your {view.toLowerCase()} breakdown from different sources.
        </p>
        <div className="flex-grow" ref={chartContainerRef}>
          {chartSize.width > 0 && (
            <PieChart
              series={[{
                data: data,
                highlightScope: {faded: 'global', highlighted: 'item'},
                faded: {innerRadius: chartSize.width / 4 - 10, additionalRadius: -10, color: 'gray'},
                innerRadius: chartSize.width / 4,
                outerRadius: chartSize.width / 2,
                cx: chartSize.width / 2 - 5,
                cy: chartSize.width / 2 - 5,
              }]}
              width={chartSize.width}
              height={chartSize.width}
              slotProps={{legend: {hidden: true}}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
