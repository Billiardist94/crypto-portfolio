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
