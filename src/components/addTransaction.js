import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/globalState';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      description,
      amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br />(negative - expense, positive - income)
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <button className="btn">
          Add transaction
        </button>
      </form>
    </>
  )
};
