"use client";
// page.tsx
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

interface Expense {
  label: string;
  percentage: number; // Storing as percentage of the total budget
}

const initialExpenses: Expense[] = [
  { label: 'Travel', percentage: 20 },
  { label: 'Food', percentage: 30 },
  { label: 'Utilities', percentage: 10 },
];

const totalBudget = 1000; // Mock total budget value

export default function BudgetPanel() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  // Calculate monthly income dynamically as sum of all budget items' absolute values
  const monthlyIncome = expenses.reduce((acc, curr) => acc + (totalBudget * curr.percentage / 100), 0);

  const handleSliderChange = (index: number, newValue: number) => {
    let newTotalPercentage = 0;
    const newExpenses = expenses.map((expense, i) => {
      if (i === index) {
        return { ...expense, percentage: newValue };
      }
      newTotalPercentage += expense.percentage;
      return expense;
    });

    newTotalPercentage += newValue;

    if (newTotalPercentage <= 100) {
      setExpenses(newExpenses);
    }
  };

  return (
    <div className="rounded-lg p-4">
      <Typography variant="h5" component="h2" className="mb-4">Budget</Typography>
      <Typography variant="h6" component="h3">Monthly Income: {monthlyIncome.toFixed(2)}</Typography>
      {expenses.map((expense, index) => (
        <div key={expense.label} className="mb-4">
          <Typography gutterBottom>
            {expense.label} - {((totalBudget * expense.percentage) / 100).toFixed(2)} ({expense.percentage}%)
          </Typography>
          <Slider
            value={expense.percentage}
            onChange={(e, newValue) => handleSliderChange(index, newValue as number)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
          />
        </div>
      ))}
    </div>
  );
}
