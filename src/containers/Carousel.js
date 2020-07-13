import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Property from '../components/Property';

const CarouselContainer = props => {
  const { properties, addToFavourites, fav } = props;

  /* eslint-disable-next-line max-len */
  const propertyItems = properties.map(property => <Property key={property.id} fav={fav} addToFavourites={addToFavourites} property={property} />);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable
      showDots
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay={false}  
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      { propertyItems }
    </Carousel>
  );
};

/* eslint-disable react/forbid-prop-types */
CarouselContainer.propTypes = {
  properties: PropTypes.object.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  fav: PropTypes.bool.isRequired,
};

export default CarouselContainer;
