import React from 'react';
import HeroSlider, { Slide, MenuNav } from 'hero-slider';
import sion from '../../assets/pub-sion.jpg';
import gaz from '../../assets/gaz.jpg';
// import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';
// import Wrapper from './components/Wrapper';
// import Title from './components/Title';
// import Subtitle from './components/Subtitle';

// importation of the styling from Requested Products
import './Slides.scss';
// import { display } from '@mui/system';

// const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
// const countyClare = 'https://i.imgur.com/idjXzVQ.jpg';
// const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
// const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';

// Functional component for managing requested products
const Slides = () => (
  <HeroSlider
    // height="100vh"
    autoplay
    // initialSlide={1}
    animation="left_to_right"
    // navigation={{ show: false }}
    controller={{
      initialSlide: 1,
      slidingAnimation: 'left_to_right',
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
    {/* <Overlay>
      <Wrapper>
        <Title>Basic Setup</Title>
        <Subtitle>
          Check out the documentation for more advanced examples.
        </Subtitle>
      </Wrapper>
    </Overlay> */}

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
        backgroundImageSrc: sion,
      }}
    />

    <Slide
      label="Bogliasco - Italy"
      background={{
        backgroundImageSrc: gaz,
      }}
    />

    {/* <Slide
      shouldRenderMask
      label="County Clare - Ireland"
      background={{
        backgroundImageSrc: countyClare,
      }}
    />

    <Slide
      shouldRenderMask
      label="Crater Rock, OR - United States"
      background={{
        backgroundImageSrc: craterRock,
      }}
    /> */}
  </HeroSlider>
);

export default Slides;
