import { combineReducers } from 'redux';
import { currencyReducer } from './currencyReducer';
import { priceReducer } from './priceReducer';

const rootReducer = combineReducers({
  curCurrency: currencyReducer,
  price: priceReducer,
});

export default rootReducer;
