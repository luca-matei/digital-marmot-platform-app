import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Transaction } from './types';

interface TransactionsTableProps {
  transactions?: Transaction[];
}

export default function TransactionsTable({ transactions = [] }: TransactionsTableProps) {
  if (transactions.length === 0) {
    return <div className="text-center py-4">No transactions found.</div>;
  }

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{transaction.name}</td>
              <td className="px-6 py-4">{transaction.category}</td>
              <td className="px-6 py-4">{`${transaction.currency}${transaction.amount}`}</td>
              <td className="px-6 py-4">{transaction.date}</td>
              <td className="px-6 py-4 flex justify-end">
                <button className="p-2 hover:text-blue-500" aria-label="Edit">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button className="p-2 hover:text-red-500" aria-label="Delete">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
