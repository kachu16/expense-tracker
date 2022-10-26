import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 200,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 700,
    date: new Date(2022, 1, 10),
  },
  {
    id: "e4",
    title: "Ration",
    amount: 900,
    date: new Date(2021, 1, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
