import React from 'react';
import ExpenseItem from "./components/Expenses/ExpenseItem";


const App = () => {
  
  const expenses = [
    {
      title: 'Food Item', 
      amount: 500.00, 
      date: new Date(2021, 2, 9),
      locationOfExpenditure: 'Restaurant'
    },
    {
      title: 'Petrol', 
      amount: 999.67, 
      date: new Date(2021, 2, 18),
      locationOfExpenditure: 'petrol pump'
    },
    {
      title: 'Movies', 
      amount: 778.96, 
      date: new Date(2021, 2, 28),
      locationOfExpenditure: 'Theater'
    }
  ]
  return (
    <div>
      <h2> Lest's get started!</h2>
      {expenses.map((expense,index) => (
        <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}
        ></ExpenseItem>
      ))}
      {/* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      locationOfExpenditure={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      locationOfExpenditure={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
