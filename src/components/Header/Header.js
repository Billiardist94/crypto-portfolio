import React from 'react';
import './Header.css';
import Case from './Case/Case';
import UserInfo from './UserInfo/UserInfo';

// eslint-disable-next-line react/prop-types
const Header = ({ currency }) => {
  // eslint-disable-next-line react/prop-types
  const filteredCurrency = currency.filter(
    (cur) => cur.rank === '1' || cur.rank === '2' || cur.rank === '3'
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <h1 className="header-logo">Crypto Portfolio</h1>
          <ul className="header-currency">
            {filteredCurrency?.map((item) => {
              return (
                <li key={item.id}>
                  <span className="header-cur-name">{item.name}</span>
                  <div className="header-cur-volume">
                    <span className="header-cur-price">
                      $ {Math.round(parseFloat(item.priceUsd) * 100) / 100}
                    </span>
                    <span
                      className="header-cur-change"
                      style={
                        item.changePercent24Hr < 0 ? { color: 'red' } : { color: 'lightgreen' }
                      }
                    >
                      {Math.round(parseFloat(item.changePercent24Hr) * 100) / 100}%
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="header-case">
            <Case />
            <UserInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
