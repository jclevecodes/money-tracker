import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expenses = [
    { 
      id: 'expense1',
      title: 'Car Insurance',
      amount: 294.67, 
      date: new Date(2021, 2, 28),
    },
    { 
      id: 'expense2',
      title: 'Gaming',
      amount: 234.78, 
      date: new Date(2021, 7, 12),
    },
    { 
      id: 'expense3',
      title: 'Desk Equipment',
      amount: 874.16, 
      date: new Date(2021, 4, 8),
    },
    { 
      id: 'expense4',
      title: 'Food',
      amount: 68.92, 
      date: new Date(2021, 5, 2),
    },
  ];
  
  return (
    <div>
      <h1> Expense Tracker </h1>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
