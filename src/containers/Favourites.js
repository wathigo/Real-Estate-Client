import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

const Favourites = ({ favourites, addToFavourites }) => favourites.length > 0 && (
  <div className="land-properties-container">
    <div className="land-cont">
      <h3>FAVOURITE PROPERTIES</h3>
      <Carousel properties={favourites} fav addToFavourites={addToFavourites} />
    </div>
  </div>
)

/* eslint-disable react/forbid-prop-types */
Favourites.propTypes = {
  favourites: PropTypes.object.isRequired,
  addToFavourites: PropTypes.func.isRequired,
};

export default Favourites;
