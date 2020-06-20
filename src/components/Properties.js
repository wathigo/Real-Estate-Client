import React from 'react';
import Carousel from './Carousel';
import CarouselContainer from './Carousel';

const Properties = (props) => {
    const { properties } = props;
    console.log(props);
    const housing_properties = properties.filter(property => property.category_id === 1);
    const land_properties = properties.filter(property => property.category_id === 2);

    return (
        <div className='properties-container'>
            <div className='land-properties-container' id='land-prop'>
                <div className='land-cont'>
                    <h3>LAND PROPERTIES</h3>
                    <Carousel properties={ land_properties }/>
                </div>
            </div>
            <div className='housing-properties-cont' id='house-prop'>
                <div className='houses-cont'>
                    <h3>HOUSING PROPERTIES</h3>
                    <Carousel properties={ housing_properties }/>
                </div>
            </div>
        </div>
    )
}

export default Properties;