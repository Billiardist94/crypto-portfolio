import React from 'react';
import './CardFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementSumCurrency, incrementSumCurrency } from '../../../redux/actionCreator/currency';

const CardFilter = () => {
  const sumCurrency = useSelector((state) => state.curCurrency);
  const dispatch = useDispatch();

  const handleDecrementSumCurrency = (e) => {
    e.preventDefault();
    dispatch(decrementSumCurrency());
  };

  const handleIncrementSumCurrency = (e) => {
    e.preventDefault();
    dispatch(incrementSumCurrency());
  };

  return (
    <div className="card-filter">
      <button
        onClick={handleDecrementSumCurrency}
        type="button"
        className="card-change-btn card-btn"
      >
        -
      </button>
      <span>{sumCurrency}</span>
      <button
        onClick={handleIncrementSumCurrency}
        type="button"
        className="card-change-btn card-btn"
      >
        +
      </button>
      <span>And press on case</span>
    </div>
  );
};

export default CardFilter;
