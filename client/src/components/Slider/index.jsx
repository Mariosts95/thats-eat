import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Styles
import './Slider.scoped.scss';

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      speed={1200}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect='fade'
    >
      {images.map((slide) => (
        <SwiperSlide key={slide}>
          <img src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
