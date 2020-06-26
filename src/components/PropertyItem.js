import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import landProperty from '../images/land_property.jpg';
import houseProperty from '../images/house_property.jpg';
import * as ActionCreators from '../actions';

const PropertyItem = props => {
  const { property, syncInfo, showProperty } = props;
  const image = property.category_id === 1 ? houseProperty : landProperty;

  useEffect(() => {
    syncInfo(`Browsing property id: ${property.id}`);
    setTimeout(() => {
      syncInfo('');
    }, 1000);
  }, [property, syncInfo]);

  const back = () => {
    showProperty('');
  };

  return (
    <div className="property-container" id="prop-details">
      <FontAwesomeIcon onClick={event => { back(event); }} icon={faArrowAltCircleLeft} />
      <p>{property.address}</p>
      <div className="overlay-cont">
        <figure>
          <img alt="specific property" src={image} />
        </figure>
      </div>

      <p className="price">
        <span>Price:  </span>
        <span>Ksh: </span>
        <s>
          {property.price + property.price * 0.1}
          {' '}
        </s>
        <span>Ksh: </span>
        <span>{property.price}</span>
      </p>
      <p>{ property.description }</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  syncInfo: info => dispatch(ActionCreators.syncInfo(info)),
  showProperty: property => dispatch(ActionCreators.showProperty(property)),
});

/* eslint-disable react/forbid-prop-types */
PropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  syncInfo: PropTypes.func.isRequired,
  showProperty: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PropertyItem);
