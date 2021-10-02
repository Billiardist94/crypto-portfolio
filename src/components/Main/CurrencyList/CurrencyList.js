import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CurrencyCarousel from './CurrencyCarousel';
import AvailCurrency from './AvailCurrency';
import './swiper-bundle.css';

// eslint-disable-next-line react/prop-types
const CurrencyList = ({ currency }) => {
  return (
    <section className="section_currency-list section">
      <CurrencyCarousel
        slides={currency?.map((cur) => (
          <SwiperSlide key={cur.id} tag="li" className="currency-item">
            <AvailCurrency
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
