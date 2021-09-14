import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setflagNewExpense(!flagNewExpense);
  };

  const [flagNewExpense, setflagNewExpense] = useState(false);

  const editingHandler = () => {
    setflagNewExpense(!flagNewExpense);
  };

  return (
    <div className="new-expense">
      {!flagNewExpense && (
        <button type="submit" onClick={editingHandler}>
          Add New Expense
        </button>
      )}
      {flagNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
