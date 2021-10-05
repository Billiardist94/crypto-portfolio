// import { handleActions, combineActions } from 'redux-actions';
// import { incrementSumCurrency, decrementSumCurrency } from '../actionCreator/currency';
//
// const initialState = 0;
//
// export const currencyReducer = handleActions(
//   {
//     [combineActions(incrementSumCurrency, decrementSumCurrency)]: (
//       state,
//       { payload: { amount } }
//     ) => {
//       return state + amount;
//     },
//   },
//   initialState
// );

const initialState = 0;

export const currencyReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_CURRENCY') {
    return state + 1;
  }

  if (action.type === 'DECREMENT_CURRENCY') {
    return state - 1;
  }

  return state;
};
