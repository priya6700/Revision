import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 297.45,
      date: new Date(2022, 4, 26),
    },
    { id: "e2", title: "Water Bill", amount: 27.4, date: new Date(2022, 3, 8) },
    { id: "e3", title: "Books", amount: 97.44, date: new Date(2022, 7, 22) },
    {
      id: "e4",
      title: "New Desk (wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
  return (
   <div>
    <Expenses item={expense}/>
   </div>
  );
};

export default App;

