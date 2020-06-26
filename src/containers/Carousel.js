import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Property from '../components/Property';

const CarouselContainer = (props) => {
    const { properties, addToFavourites, fav } = props;

    const property_items = properties.map(property => <Property key={property.id} fav={ fav } addToFavourites={ addToFavourites } property={property}/>);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
        <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        { property_items }
      </Carousel>
      )
}

CarouselContainer.propTypes = {
  properties: PropTypes.object.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  fav: PropTypes.bool.isRequired, 
};

export default CarouselContainer;

