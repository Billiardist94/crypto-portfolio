// import { createActions } from 'redux-actions';
//
// export const { incrementSumCurrency, decrementSumCurrency } = createActions({
//   INCREMENT_CURRENCY: (amount = 1) => ({ amount }),
//   DECREMENT_CURRENCY: (amount = 1) => ({ amount: -amount }),
// });

export const incrementSumCurrency = () => ({
  type: 'INCREMENT_CURRENCY',
});

export const decrementSumCurrency = () => ({
  type: 'DECREMENT_CURRENCY',
});
