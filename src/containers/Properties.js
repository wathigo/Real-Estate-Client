import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import Favourites from './Favourites';

const Properties = props => {
  const { properties, addToFavourites, favourites } = props;
  const allProperties = properties === undefined ? [] : properties;
  const housingProperties = allProperties.filter(property => property.category_id === 1);
  const landProperties = allProperties.filter(property => property.category_id === 2);

  return (
    <div className="properties-container">
      <Favourites favourites={favourites} addToFavourites={addToFavourites} />
      <div className="land-properties-container" id="land-prop">
        <div className="land-cont">
          <h3>LAND PROPERTIES</h3>
          <Carousel 
          properties={landProperties}
          fav={false}
          addToFavourites={addToFavourites} 
          />
        </div>
      </div>
      <div className="housing-properties-cont" id="house-prop">
        <div className="houses-cont">
          <h3>HOUSING PROPERTIES</h3>
          <Carousel 
          properties={housingProperties} 
          fav={false} 
          addToFavourites={addToFavourites} 
          />
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/forbid-prop-types */
Properties.propTypes = {
  properties: PropTypes.object.isRequired,
  favourites: PropTypes.object.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  syncInfomation: PropTypes.string.isRequired,
};

export default Properties;
