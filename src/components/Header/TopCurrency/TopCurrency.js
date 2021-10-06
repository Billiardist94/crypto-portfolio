import React from 'react';
import './TopCurrency.css'
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TopCurrency = ({ currency }) => {
  // eslint-disable-next-line react/prop-types
  const filteredCurrency = currency.filter(
    (cur) => cur.rank === '1' || cur.rank === '2' || cur.rank === '3'
  );

  const regex = /(?<=\d)(?=(\d{3})+(?!\d))/g;
  const subst = ` `;

  return (
    <>
      <div className="container">
        <ul className="top-currency__list">
          {filteredCurrency?.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={`/${item.id}`}>
                  <span className="name">{item.name}</span>
                </NavLink>
                <div className="volume">
                  <span className="price">
                    $ {String(Math.round(parseFloat(item.priceUsd) * 100) / 100).replace(regex, subst)}
                  </span>
                  <span
                    className={
                      item.changePercent24Hr < 0
                        ? 'changePercent-red change'
                        : 'changePercent-green change'
                    }
                  >
                    {Math.round(parseFloat(item.changePercent24Hr) * 100) / 100} %
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

export default TopCurrency;
