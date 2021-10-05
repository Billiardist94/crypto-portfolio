import React from 'react';
import '../Header.css';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const HeaderInfo = ({ currency }) => {
  // eslint-disable-next-line react/prop-types
  const filteredCurrency = currency.filter(
    (cur) => cur.rank === '1' || cur.rank === '2' || cur.rank === '3'
  );

  return (
    <>
      <div className="container">
        <ul className="header-currency">
          {filteredCurrency?.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={`/${item.id}`}>
                  <span className="header-cur-name">{item.name}</span>
                </NavLink>
                <div className="header-cur-volume">
                  <span className="header-cur-price">
                    $ {Math.round(parseFloat(item.priceUsd) * 100) / 100}
                  </span>
                  <span
                    className={
                      item.changePercent24Hr < 0
                        ? 'item-changePercent_red header-cur-change'
                        : 'item-changePercent_green header-cur-change'
                    }
                  >
                    {Math.round(parseFloat(item.changePercent24Hr) * 100) / 100}%
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeaderInfo;
