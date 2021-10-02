import React, { useState } from 'react';
import './Main.css';
import Intro from './Intro/Intro';
import CurrencyList from './CurrencyList/CurrencyList';

// eslint-disable-next-line react/prop-types
const Main = ({ currency }) => {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value.trim());
  };

  // eslint-disable-next-line react/prop-types
  const filteredCurrency = currency.filter(
    (cur) =>
      cur.name.toLowerCase().includes(value.toLowerCase()) ||
      cur.symbol.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <main className="main">
      <div className="container">
        <div className="main-content">
          <Intro />
          <section className="main-form">
            <form>
              <input
                onChange={handleInput}
                type="text"
                className="main-input"
                placeholder="Search"
              />
            </form>
            <CurrencyList currency={filteredCurrency} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
