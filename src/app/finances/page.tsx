import Budget from './BudgetPanel';
import TransactionsChart from './TransactionsChart';
import TransactionsTable from './TransactionsTable';

const mockTransactions = [
  { name: 'Trip to Paris', category: 'Travel', amount: -200, currency: 'USD', date: '2023-01-15' },
  { name: 'Groceries', category: 'Food', amount: -300, currency: 'USD', date: '2023-01-20' },
  { name: 'Electric Bill', category: 'Utilities', amount: -100, currency: 'USD', date: '2023-01-10' },
  { name: 'Lunch', category: 'Food', amount: -20, currency: 'USD', date: '2023-01-21' },
  { name: 'Gas Bill', category: 'Utilities', amount: -50, currency: 'USD', date: '2023-01-12' },
  { name: 'Flight Ticket', category: 'Travel', amount: -500, currency: 'USD', date: '2023-01-25' },
  { name: 'Salary', category: 'Income', amount: 2000, currency: 'USD', date: '2023-01-05' },
  { name: 'Dinner', category: 'Food', amount: -40, currency: 'USD', date: '2023-01-22' },
  { name: 'Phone Bill', category: 'Utilities', amount: -30, currency: 'USD', date: '2023-01-17' },
  { name: 'Shopping', category: 'Misc', amount: -150, currency: 'USD', date: '2023-01-08' },
  { name: 'Rent', category: 'Housing', amount: -1000, currency: 'USD', date: '2023-01-01' },
  { name: 'Freelance Work', category: 'Income', amount: 500, currency: 'USD', date: '2023-01-02' },
  { name: 'Movie Night', category: 'Entertainment', amount: -25, currency: 'USD', date: '2023-01-24' },
  { name: 'Internet Bill', category: 'Utilities', amount: -60, currency: 'USD', date: '2023-01-18' },
  { name: 'Groceries', category: 'Food', amount: -80, currency: 'USD', date: '2023-01-27' },
  { name: 'Car Insurance', category: 'Vehicle', amount: -120, currency: 'USD', date: '2023-01-13' },
  { name: 'Bonus', category: 'Income', amount: 300, currency: 'USD', date: '2023-01-07' },
  { name: 'Dentist Appointment', category: 'Health', amount: -50, currency: 'USD', date: '2023-01-19' },
  { name: 'Gym Membership', category: 'Health', amount: -70, currency: 'USD', date: '2023-01-11' },
  { name: 'Birthday Gift', category: 'Gifts', amount: -40, currency: 'USD', date: '2023-01-28' },
  { name: 'Stock Investment', category: 'Investments', amount: -200, currency: 'USD', date: '2023-01-03' },
  { name: 'Dividend', category: 'Income', amount: 50, currency: 'USD', date: '2023-01-09' },
  { name: 'Haircut', category: 'Personal Care', amount: -30, currency: 'USD', date: '2023-01-26' },
  { name: 'Vacation Planning', category: 'Travel', amount: -100, currency: 'USD', date: '2023-01-14' },
  { name: 'Tax Refund', category: 'Income', amount: 150, currency: 'USD', date: '2023-01-06' },
  { name: 'Dinner with Friends', category: 'Food', amount: -60, currency: 'USD', date: '2023-01-23' },
  { name: 'Medical Checkup', category: 'Health', amount: -80, currency: 'USD', date: '2023-01-16' },
  { name: 'Book Purchase', category: 'Entertainment', amount: -20, currency: 'USD', date: '2023-01-29' },
  { name: 'Investment Loss', category: 'Investments', amount: -100, currency: 'USD', date: '2023-01-04' },
  { name: 'Home Repair', category: 'Home', amount: -150, currency: 'USD', date: '2023-01-30' },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-between items-start w-full p-4">
        <Budget />
        <TransactionsChart transactions={mockTransactions} />
      </div>
      <div className="w-full p-4">
        <TransactionsTable transactions={mockTransactions} />
      </div>
    </div>
  );
}
