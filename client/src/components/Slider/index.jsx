import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import { v4 as uuidv4 } from 'uuid';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const imgStyles = {
  display: 'block',
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: 'auto',
};

const Slider = ({ images, styles }) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      style={{ ...styles }}
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
        <SwiperSlide key={uuidv4()}>
          <img src={slide} style={{ ...imgStyles }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
