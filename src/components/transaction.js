import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

export const Transaction = (props) => {
  const { transaction } = props;
  const { deleteTransaction } = useContext(GlobalContext);

  const getClassName = () => {
    return transaction.amount < 0 ? 'minus' : 'plus';
  };

  const renderDetails = () => {
    const { description, amount } = transaction;
    const sign = amount < 0 ? '-' : '';
    const formatedAmount = `${sign}$${Math.abs(amount)}`;

    return (
      <>
        {description} <span>{formatedAmount}</span>
      </>
    );
  };

  return (
    <li className={getClassName()}>
      {renderDetails()}
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  )
};
