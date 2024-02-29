import {TransactionType} from "@/app/(app-pages)/finance/types";
import BudgetManager from "@/app/(app-pages)/finance/budget-manager";
import TransactionsTable from "@/app/(app-pages)/finance/transactions-table";
import TransactionsChart from "@/app/(app-pages)/finance/transactions-charts";

const transactions : TransactionType[] = [
  {"title": "Jewelry Box", "category": "Gifts", "amount": -804.18, "datetime": "2023-01-01T00:00:00Z"},
  {"title": "Wellness Spa", "category": "Health", "amount": 548.76, "datetime": "2023-01-02T00:00:00Z"},
  {"title": "Fashion Hub", "category": "Clothing", "amount": -987.12, "datetime": "2023-01-03T00:00:00Z"},
  {"title": "City Transit", "category": "Transport", "amount": 423.67, "datetime": "2023-01-04T00:00:00Z"},
  {"title": "Online Courses", "category": "Education", "amount": -200.55, "datetime": "2023-01-05T00:00:00Z"},
  {"title": "GameZone", "category": "Entertainment", "amount": 300.00, "datetime": "2023-01-06T00:00:00Z"},
  {"title": "Green Grocers", "category": "Food", "amount": -150.25, "datetime": "2023-01-07T00:00:00Z"},
  {"title": "Internet Services", "category": "Utilities", "amount": 250.39, "datetime": "2023-01-08T00:00:00Z"},
  {"title": "Kids Apparel", "category": "Clothing", "amount": -320.48, "datetime": "2023-01-09T00:00:00Z"},
  {"title": "Fuel Station", "category": "Transport", "amount": 500.21, "datetime": "2023-01-10T00:00:00Z"},
  {"title": "Art Workshop", "category": "Education", "amount": -425.67, "datetime": "2023-01-11T00:00:00Z"},
  {"title": "Flower Power", "category": "Gifts", "amount": 375.89, "datetime": "2023-01-12T00:00:00Z"},
  {"title": "DIY Tools", "category": "Home", "amount": -450.00, "datetime": "2023-01-13T00:00:00Z"},
  {"title": "Tech Solutions", "category": "Electronics", "amount": 600.55, "datetime": "2023-01-14T00:00:00Z"},
  {"title": "Pharmacy Central", "category": "Health", "amount": -275.34, "datetime": "2023-01-15T00:00:00Z"},
  {"title": "Streaming Plus", "category": "Entertainment", "amount": 250.00, "datetime": "2023-01-16T00:00:00Z"},
  {"title": "Bakery Heaven", "category": "Food", "amount": -125.67, "datetime": "2023-01-17T00:00:00Z"},
  {"title": "City Water", "category": "Utilities", "amount": 325.78, "datetime": "2023-01-18T00:00:00Z"},
  {"title": "Outdoor Wear", "category": "Clothing", "amount": -350.92, "datetime": "2023-01-19T00:00:00Z"},
  {"title": "Taxi Service", "category": "Transport", "amount": 475.00, "datetime": "2023-01-20T00:00:00Z"},
  {"title": "Book World", "category": "Education", "amount": -225.50, "datetime": "2023-01-21T00:00:00Z"},
  {"title": "Gifts Galore", "category": "Gifts", "amount": 400.00, "datetime": "2023-01-22T00:00:00Z"},
  {"title": "Furniture Fair", "category": "Home", "amount": -500.00, "datetime": "2023-01-23T00:00:00Z"},
  {"title": "Gadget World", "category": "Electronics", "amount": 550.45, "datetime": "2023-01-24T00:00:00Z"},
  {"title": "Dental Services", "category": "Health", "amount": -300.00, "datetime": "2023-01-25T00:00:00Z"},
  {"title": "Cinema World", "category": "Entertainment", "amount": 200.00, "datetime": "2023-01-26T00:00:00Z"},
  {"title": "Green Grocers", "category": "Food", "amount": -100.75, "datetime": "2023-01-27T00:00:00Z"},
  {"title": "Green Energy", "category": "Utilities", "amount": 300.50, "datetime": "2023-01-28T00:00:00Z"},
  {"title": "Fashion Hub", "category": "Clothing", "amount": -450.25, "datetime": "2023-01-29T00:00:00Z"},
  {"title": "City Transit", "category": "Transport", "amount": 475.95, "datetime": "2023-01-30T00:00:00Z"},
  {"title": "Online Courses", "category": "Education", "amount": -400.00, "datetime": "2023-01-31T00:00:00Z"},
  {"title": "Gifts Galore", "category": "Gifts", "amount": 350.00, "datetime": "2023-02-01T00:00:00Z"},
  {"title": "DIY Tools", "category": "Home", "amount": -550.00, "datetime": "2023-02-02T00:00:00Z"},
  {"title": "Tech Solutions", "category": "Electronics", "amount": 650.67, "datetime": "2023-02-03T00:00:00Z"},
  {"title": "Pharmacy Central", "category": "Health", "amount": -320.45, "datetime": "2023-02-04T00:00:00Z"},
  {"title": "Streaming Plus", "category": "Entertainment", "amount": 275.00, "datetime": "2023-02-05T00:00:00Z"},
  {"title": "Bakery Heaven", "category": "Food", "amount": -150.00, "datetime": "2023-02-06T00:00:00Z"},
  {"title": "City Water", "category": "Utilities", "amount": 325.00, "datetime": "2023-02-07T00:00:00Z"},
  {"title": "Kids Apparel", "category": "Clothing", "amount": -375.00, "datetime": "2023-02-08T00:00:00Z"},
  {"title": "Fuel Station", "category": "Transport", "amount": 500.00, "datetime": "2023-02-09T00:00:00Z"}
]


export default function Finance() {
  return (
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/4 px-2">
          <BudgetManager/>
        </div>
        <div className="w-1/4 px-2">
          <BudgetManager/>
        </div>
        <div className="w-1/4 px-2">
          <BudgetManager/>
        </div>
        <div className="w-1/4 px-2">
          <BudgetManager/>
        </div>
        <div className="w-full px-2 mt-24">
          <TransactionsTable transactions={transactions}/>
        </div>
      </div>
  );
}