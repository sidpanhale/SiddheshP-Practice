import React, { useState } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';

const App = () => {
  const DummyExpenses = [
    {
      id: '1',
      title: 'Laptop',
      amount: 600,
      date: new Date(2019, 7, 12),
    },
    { id: '2', title: 'Mouse', amount: 30, date: new Date(2019, 8, 12) },
    {
      id: '3',
      title: 'Headphones',
      amount: 30,
      date: new Date(2021, 7, 28),
    },
    {
      id: '4',
      title: 'Table',
      amount: 100,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DummyExpenses)

  const addExpenseHandler = expense => {
    setExpenses((prevState) => {
     return [expense, ...prevState]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;