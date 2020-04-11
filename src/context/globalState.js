import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';
import * as actionTypes from './actionTypes';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = transaction => {
    dispatch({
      type: actionTypes.ADD_TRANSACTION,
      payload: { transaction },
    });
  };

  const deleteTransaction = id => {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: { id },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
