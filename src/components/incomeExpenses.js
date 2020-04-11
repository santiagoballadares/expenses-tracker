import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

export const IncomeExpenses = () => {
  const { transactions = [] } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  
  const getIncome = () => {
    const income = amounts
      .filter(amount => amount > 0)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
    return `$${income}`;
  };
  
  const getExpense = () => {
    const expense = amounts
      .filter(amount => amount < 0)
      .reduce((a, b) => a + b, 0);
    return `$${Math.abs(expense).toFixed(2)}`;
  };

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          {getIncome()}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          {getExpense()}
        </p>
      </div>
    </div>
  )
};
