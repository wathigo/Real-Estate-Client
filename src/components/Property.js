import React from 'react';
import landProperty from '../images/land_property.jpg';
import houseProperty from '../images/house_property.jpg';

const Property = (props) => {
    const { property } = props;

    const image = property.category_id === 1 ? houseProperty : landProperty;

    return  (
        <div className='property-container' id>
            <figure>
                <img src={image} />
            </figure>
            <div>For Sale</div>
            <p>{ property.address }</p>
            <p>
                <span>Price:  </span>
                <span>Ksh: </span>
                 <s>{ property.price + property.price*0.1} </s>
                 <span>Ksh: </span>
                 <span>{ property.price }</span>
            </p>
        </div>
    )
}

export default Property;