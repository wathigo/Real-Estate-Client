import React from 'react';
import Carousel from './Carousel';

const Favourites = (props) => {
    const { favourites, addToFavourites } = props;
    const allFavourites = favourites === undefined ? '' : favourites;
    console.log(allFavourites)
    if(allFavourites.length > 0) {
        return (
            <div className='land-properties-container'>
                <div className='land-cont'>
                    <h3>FAVOURITE PROPERTIES</h3>
                    <Carousel properties={allFavourites} fav={ true } addToFavourites={addToFavourites} />
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default Favourites;