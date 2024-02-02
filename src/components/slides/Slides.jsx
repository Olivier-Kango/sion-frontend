import React from 'react';
import HeroSlider, { Slide, MenuNav } from 'hero-slider';
import { useMediaQuery } from '@mui/material';
import sion from '../../assets/pub-sion.jpg';
import gaz from '../../assets/gaz.jpg';
import sionPhone from '../../assets/sion-phone.jpg';
import gazPhone from '../../assets/gaz-phone.jpg';
import './Slides.scss';

// Functional component for managing requested products
const Slides = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <HeroSlider
      autoplay
      animation="fade"
      controller={{
        initialSlide: 1,
        slidingAnimation: 'fade',
        slidingDuration: 150,
        slidingDelay: 100,
        onSliding: (nextSlide) => console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) => console.debug(
          'onBeforeSliding(previousSlide, nextSlide): ',
          previousSlide,
          nextSlide,
        ),
        onAfterSliding: (nextSlide) => console.debug('onAfterSliding(nextSlide): ', nextSlide),
      }}
      style={{
        // backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      <MenuNav
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1000,
        }}
      />

      <Slide
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: isMobile ? sionPhone : sion,
        }}
      />

      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: isMobile ? gazPhone : gaz,
        }}
      />
    </HeroSlider>
  );
};

export default Slides;
