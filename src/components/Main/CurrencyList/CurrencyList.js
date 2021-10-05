import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CurrencyCarousel from './CurrencyCarousel';
import AvailCurrency from './AvailCurrency';
import './swiper-bundle.css';

// eslint-disable-next-line react/prop-types
const CurrencyList = ({ currency }) => {

  return (
    <section className="section_currency-list section">
      <div className="currency-item list-title">
        <div className="item-info">
          <p className="item-rank title-rank">#</p>
          <p className="item-logo">Logo</p>
          <p className="item-header title-name">Name</p>
        </div>
        <div className="item-volume">
          <p className="item-priceUsd">Price/Change 24h</p>
        </div>
        <p className="item-button title-button"> </p>
      </div>
      <CurrencyCarousel
        slides={currency?.map((cur) => (
          <SwiperSlide key={cur.id} tag="li" className="currency-item">
            <AvailCurrency
              rank={`${cur.rank}`}
              name={`${cur.name},`}
              symbol={`${cur.symbol}`}
              priceUsd={`${cur.priceUsd}`}
              changePercent24Hr={cur.changePercent24Hr}
              id={cur.id}
            />
          </SwiperSlide>
        ))}
      />
    </section>
  );
};

export default CurrencyList;
