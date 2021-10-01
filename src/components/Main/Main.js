import React, { useState } from 'react';
import './Main.css';
import Intro from './Intro/Intro';
import CurrencyList from './CurrencyList/CurrencyList';

const Main = () => {
  const { currency, setCurrency } = useState([]);

  fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((result) => setCurrency(result));

  return (
    <main className="main">
      <div className="container">
        <div className="main-content">
          <Intro />
          <CurrencyList currency={currency} />
        </div>
      </div>
    </main>
  );
};

export default Main;
