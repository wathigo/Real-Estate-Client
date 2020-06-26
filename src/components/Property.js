import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import landProperty from '../images/land_property.jpg';
import houseProperty from '../images/house_property.jpg';
import * as ActionCreators from '../actions';

const Property = (props) => {
  const {
    property, addToFavourites, fav, syncInfo, showProperty,
  } = props;

  const image = property.category_id === 1 ? houseProperty : landProperty;

  const handleClick = (event) => {
    event.preventDefault();
    syncInfo('Adding to favourites asyc action in progress...');
    event.target.disabled = true;
    const property_id = event.target.getAttribute('data-id');
    addToFavourites(property_id);
  };

  const toggleProperty = (event) => {
    event.preventDefault();
    showProperty(property);
  };

  if (fav) {
    return (
      <div className="property-container" id>
        <div className="overlay-cont">
          <div className="overlay">
            <div className="view">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span onClick={toggleProperty}>View Property</span>
            </div>
          </div>
          <figure>
            <img src={image} />
          </figure>
        </div>
        <div className="for-sale">For Sale</div>
        <p>{property.address}</p>
        <p>
          <span>Price:  </span>
          <span>Ksh: </span>
          <s>
            {property.price + property.price * 0.1}
            {' '}
          </s>
          <span>Ksh: </span>
          <span>{property.price}</span>
        </p>
      </div>
    );
  }
  return (
    <div className="property-container" id>
      <div className="overlay-cont">
        <div className="overlay">
          <div className="fav">
            <FontAwesomeIcon icon={faBookmark} />
            <span data-id={property.id} onClick={handleClick}>Add to favorites</span>
          </div>
          <div className="view">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span onClick={toggleProperty}>View Property</span>
          </div>
        </div>
        <figure>
          <img src={image} />
        </figure>
      </div>
      <div className="for-sale">For Sale</div>
      <p>{property.address}</p>
      <p>
        <span>Price:  </span>
        <span>Ksh: </span>
        <s>
          {property.price + property.price * 0.1}
          {' '}
        </s>
        <span>Ksh: </span>
        <span>{property.price}</span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  syncInfo: (info) => {
    dispatch(ActionCreators.syncInfo(info));
  },
  showProperty: (property) => dispatch(ActionCreators.showProperty(property)),
});

const mapStateToProps = ((state) => state);

Property.propTypes = {
  fav: PropTypes.bool.isRequired,
  property: PropTypes.object.isRequired,
  syncInfo: PropTypes.func.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  showProperty: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
