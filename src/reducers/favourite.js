import { act } from "react-dom/test-utils";

const favouriteReducer = (favourites = {}, action) => {
    const { type, favourite, error } = action;
    switch(type) {
        case 'ADD_FAVOURITE':
            return {...favourites, favourite}
        case 'ADD_FAVOURITE_ERROR':
            return {...favourites, error: error}
        default:
            return favourites 
    }
};

export default favouriteReducer;