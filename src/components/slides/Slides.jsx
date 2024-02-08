import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Slide } from 'hero-slider';
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
    <Carousel>
      <Carousel.Item>
        <Slide
          label="First Slide"
          background={{
            backgroundImageSrc: isMobile ? gazPhone : gaz,
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide
          label="Second Slide"
          background={{
            backgroundImageSrc: isMobile ? sionPhone : sion,
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide
          label="Third Slide"
          background={{
            backgroundImageSrc: isMobile ? gazPhone : gaz,
          }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
