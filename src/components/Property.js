import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import * as ActionCreators from '../actions';

const Property = props => {
  const {
    property, addToFavourites, fav, syncInfo, showProperty,
  } = props;
  /* eslint-disable global-require, import/no-dynamic-require */
  const image = property.category_id === 1
    ? require(`../images/house/${property.id}.jpg`)
    : require(`../images/land/${property.id}.jpg`);

  const handleClick = event => {
    event.preventDefault();
    syncInfo('Adding to favourites asyc action in progress...');
    const propertyId = event.target.getAttribute('data-id');
    addToFavourites(propertyId);
  };

  const toggleProperty = event => {
    event.preventDefault();
    showProperty(property);
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <div className="property-container" id>
      <div className="overlay-cont">
        <div className="overlay">
          {!fav && (
            <div className="fav">
              <FontAwesomeIcon icon={faBookmark} />
              <span data-id={property.id} onClick={handleClick}>Add to favorites</span>
            </div>
          )}
          <div className="view">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span onClick={toggleProperty}>View Property</span>
          </div>
        </div>
        <figure>
          <img alt="property" src={image} />
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

const mapDispatchToProps = dispatch => ({
  syncInfo: info => {
    dispatch(ActionCreators.syncInfo(info));
  },
  showProperty: property => dispatch(ActionCreators.showProperty(property)),
});

const mapStateToProps = (state => state);

/* eslint-disable react/forbid-prop-types */
Property.propTypes = {
  fav: PropTypes.bool.isRequired,
  property: PropTypes.object.isRequired,
  syncInfo: PropTypes.func.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  showProperty: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
