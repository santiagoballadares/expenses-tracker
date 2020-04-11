import React from 'react';

import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { AddTransaction } from './components/addTransaction';

import { GlobalProvider } from './context/globalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header title="Expenses Tracker App" />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
