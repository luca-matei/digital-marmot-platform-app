"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {TransactionType} from "@/app/(app-pages)/finance/types";
import BudgetManager from "@/app/(app-pages)/finance/transactions/budget-manager";
import TransactionsTable from "@/app/(app-pages)/finance/transactions/transactions-table";
import IncomeVsExpensesChart from "@/app/(app-pages)/finance/transactions/income-vs-expenses-chart";
import CategoryChart from "@/app/(app-pages)/finance/transactions/category-chart";

export default function Finance() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('finance_transactions')
        .select('*');

      if (error) {
        console.error("Error fetching transactions:", error);
        return;
      }

      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-1/4 px-2">
        <BudgetManager/>
      </div>
      <div className="w-1/4 px-2">
        <CategoryChart transactions={transactions}/>
      </div>
      <div className="w-1/2 px-2">
        <IncomeVsExpensesChart transactions={transactions}/>
      </div>
      <div className="w-full px-2 mt-24">
        <TransactionsTable transactions={transactions}/>
      </div>
    </div>
  );
}