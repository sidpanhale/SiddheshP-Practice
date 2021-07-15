import React from 'react';

import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: '1',
      title: 'Laptop',
      amount: 600,
      date: new Date(2019, 7, 12),
    },
    { id: '2', title: 'Mouse', amount: 30, date: new Date(2020, 7, 12) },
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;