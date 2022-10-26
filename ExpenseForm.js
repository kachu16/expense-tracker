import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  // Here we are using multiple states but there is an alternative where we can use one state by passing an object instead
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChnageHandler = (event) => {
    setEnteredTitle(event.target.value);

    //In this case, our next state is depending on the previois state, so rather than using the following we can use an alternative
    // setuserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value,

    // });

    //If your state update depends on the previous state, use this function form
    // setuserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChnageHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChnageHandler = (event) => {
    setEnteredDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

   props.onSaveExpenseData(expenseData);

    // To clear the form :- 
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChnageHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChnageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChnageHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
