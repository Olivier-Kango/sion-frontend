import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';

// importation of the styling from Requested Products
import './Slides.scss';

const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
const countyClare = 'https://i.imgur.com/idjXzVQ.jpg';
const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';

// Functional component for managing requested products
const Slides = () => (
  <HeroSlider
    slidingAnimation="left_to_right"
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
    onChange={(nextSlide) => console.log('onChange', nextSlide)}
    onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
    style={{
      backgroundColor: 'rgba(0, 0, 0.33)',
    }}
    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: true,
      shouldDisplayButtons: true,
      autoplayDuration: 5000,
      height: '100vh',
    }}
  >
    <Slide
      background={{
        backgroundImage: bogliasco,
        backgroundAttachment: 'fixed',
      }}
    />
    <Slide
      background={{
        backgroundImage: countyClare,
        backgroundAttachment: 'fixed',
      }}
    />
    <Slide
      background={{
        backgroundImage: craterRock,
        backgroundAttachment: 'fixed',
      }}
    />
    <Slide
      background={{
        backgroundImage: giauPass,
        backgroundAttachment: 'fixed',
      }}
    />
  </HeroSlider>
);

export default Slides;
