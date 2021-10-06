import React from 'react';
import './CurrencyList.css';
import { Swiper } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import './swiper-bundle.css';

SwiperCore.use([Scrollbar, Mousewheel]);

const CurrencyCarousel = ({ slides }) => {
  return (
    <Swiper
      wrapperTag="ul"
      spaceBetween={10}
      slidesPerView={6}
      direction="vertical"
      scrollbar={{ draggable: true }}
      mousewheel
      speed={100}
    >
      {slides}
    </Swiper>
  );
};

export default CurrencyCarousel;
