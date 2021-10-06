import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CurrencyCarousel from './CurrencyCarousel';
import AvailCurrency from './AvailCurrency';
import './swiper-bundle.css';

const CurrencyList = ({ currency }) => {
  return (
    <section className="currency__table">
      <div className="table__item list__title">
        <div className="item__info">
          <p className="item__rank title__rank">#</p>
          <p className="item__logo">Logo</p>
          <p className="item__header title__name">Name</p>
        </div>
        <div className="item__volume">
          <p className="item__priceUsd">Price/Change 24h</p>
        </div>
        <p className="item__button title__button"> </p>
      </div>
      <CurrencyCarousel
        slides={currency?.map((cur) => (
          <SwiperSlide key={cur.id} tag="li" className="table__item">
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
