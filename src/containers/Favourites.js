import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

const Favourites = props => {
  const { favourites, addToFavourites } = props;
  const allFavourites = favourites === undefined ? '' : favourites;
  console.log(allFavourites);
  if (allFavourites.length > 0) {
    return (
      <div className="land-properties-container">
        <div className="land-cont">
          <h3>FAVOURITE PROPERTIES</h3>
          <Carousel properties={allFavourites} fav addToFavourites={addToFavourites} />
        </div>
      </div>
    );
  }
  return '';
};

/* eslint-disable react/forbid-prop-types */
Favourites.propTypes = {
  favourites: PropTypes.object.isRequired,
  addToFavourites: PropTypes.func.isRequired,
};

export default Favourites;
