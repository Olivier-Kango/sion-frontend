import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from '@mui/material';
import sion from '../../assets/pub-sion.jpg';
import coussin from '../../assets/coussin.jpg';
import elec from '../../assets/elec.jpg';
import gaz from '../../assets/gaz.jpg';
import sionPhone from '../../assets/sion-phone.jpg';
import gazPhone from '../../assets/gaz-phone.jpg';
import './Slides.scss';

// Functional component for managing requested products
const Slides = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? gazPhone : gaz}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? sionPhone : sion}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={coussin}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={elec}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
