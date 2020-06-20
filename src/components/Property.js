import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import landProperty from '../images/land_property.jpg';
import houseProperty from '../images/house_property.jpg';

const Property = (props) => {
    const { property } = props;

    const image = property.category_id === 1 ? houseProperty : landProperty;

    return (
        <div className='property-container' id>
            <div className='overlay-cont'>
                <div className='overlay'>
                    <div className='fav'>
                        <FontAwesomeIcon icon={ faBookmark }/>
                        <span>Add to favorites</span>
                    </div>
                    <div className='view'>
                        <FontAwesomeIcon icon={ faExternalLinkAlt } />
                        <span>View Project</span>
                    </div>
                </div>
                <figure>
                    <img src={image} />
                </figure>
            </div>
            <div className='for-sale'>For Sale</div>
            <p>{property.address}</p>
            <p>
                <span>Price:  </span>
                <span>Ksh: </span>
                <s>{property.price + property.price * 0.1} </s>
                <span>Ksh: </span>
                <span>{property.price}</span>
            </p>
        </div>
    )
}

export default Property;