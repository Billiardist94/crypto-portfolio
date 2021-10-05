import React from 'react';
import './Case.css';
import { useSelector } from 'react-redux';

const Case = () => {
  const sumCurrency = useSelector((state) => state.curCurrency);
  const price = useSelector((state) => state.price.value);

  const curPricePerQuantity = (sumCurrency * Math.round(parseFloat(price) * 100)) / 100; // текущая обновляемая стоимость валюты за кол-во в USD

  const onCase = (e) => {
    e.preventDefault();
    localStorage.setItem('currentSum', curPricePerQuantity);
  };

  const fixPrice = localStorage.getItem('currentSum'); // стоимость валюты за кол-во в USD на момент записи в портфель

  const diffBetwPrices = fixPrice - curPricePerQuantity; // относительная разница между стоимостью валюты на момент записи в портфель и стоимостью валюты текущей

  const diffBetwPricesPerc = (diffBetwPrices / curPricePerQuantity) * 100; // абсолютное выражение между стоимостью валюты на момент записи в портфель и стоимостью валюты текущей

  return (
    <div className="case">
      <div className="case-sum">
        <span>{fixPrice} USD</span>
        <span
          className={
            diffBetwPrices < 0
              ? 'item-changePercent_red header-cur-change'
              : 'item-changePercent_green header-cur-change'
          }
        >
          {Math.round(parseFloat(diffBetwPrices) * 100) / 100}
        </span>
        <span>({Math.round(parseFloat(diffBetwPricesPerc) * 100) / 100}%)</span>
      </div>
      <div className="case-logo">
        <button onClick={onCase} className="case-logo-btn" type="button">
          <svg
            version="1.1"
            id="Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
          >
            <g>
              <path
                d="M62,16H42.727C42.064,13.082,39.791,8,32,8s-10.064,5.082-10.727,8H2c-1.104,0-2,0.896-2,2v36c0,1.104,0.896,2,2,2h60
                                      c1.104,0,2-0.896,2-2V18C64,16.896,63.104,16,62,16z M32,12c4.335,0,5.98,2.244,6.608,4H25.388C26.018,14.253,27.669,12,32,12z
                                       M60,20v8H4v-8H60z M29,32h6v2h-6V32z M4,52V32h21v4c0,1.104,0.896,2,2,2h10c1.104,0,2-0.896,2-2v-4h21v20H4z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Case;
