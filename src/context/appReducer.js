import * as actionTypes from './actionTypes';

export default (state, action) => {
  switch(action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction]
      };
    case actionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => 
          transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
