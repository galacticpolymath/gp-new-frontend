import React from 'react'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide from './Slide'
import { customControls } from './utils';

const Carousel = ({
  items
}) => {
  return <RRCarousel
    showStatus={false}
    className="Carousel"
    {...customControls}
  >
    {items.sort((a, b) => a.order - b.order).map((item, i) => <Slide key={i} {...item} />)}
  </RRCarousel>
}

export default Carousel