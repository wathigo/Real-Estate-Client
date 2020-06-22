import { act } from "react-dom/test-utils";

const favouriteReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FAVOURITE':
            return {...state, favourite: action.favourite}
        case 'ADD_FAVOURITE_ERROR':
            return {...state, error: action.error}
        default:
            return state 
    }
};

export default favouriteReducer;