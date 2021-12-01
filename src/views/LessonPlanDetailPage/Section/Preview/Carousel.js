import React from 'react'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide from './Slide'
import { getVideoThumb } from './utils';

const Carousel = ({
  items
}) => {
  return <RRCarousel
    showArrows
    showThumbs
    className="Carousel"
    renderThumbs={items => items.map(({ props: { mainLink, title } }, i) =>
      <img key={i} src={getVideoThumb(mainLink)} alt={title} />)}
  >
    {items.sort((a, b) => a.order - b.order).map((item, i) => <Slide key={i} {...item} />)}
  </RRCarousel>
}

export default Carousel