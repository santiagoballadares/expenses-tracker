import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';
import { Transaction } from './transaction';

export const TransactionList = () => {
  const { transactions = [] } = useContext(GlobalContext);

  const renderTransactions = () => {
    return transactions.map(transaction => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {renderTransactions()}
      </ul>
    </>
  )
};
