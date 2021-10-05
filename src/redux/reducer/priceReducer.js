const initialState = null;

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRICE':
      return {
        name: action.payload.name,
        oldValue: state.value,
        value: action.payload.value,
      };
  }

  return state;
};
