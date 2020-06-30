import {
  ADD_FAVOURITE, ADD_FAVOURITE_ERROR, FETCH_FAVOURITES, FETCH_FAVORITES_ERROR, REMOVE_FAV_ERROR,
} from '../actions/types';

const favouriteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, favourite: action.favourite };
    case ADD_FAVOURITE_ERROR:
      return { ...state, error: action.error };
    case FETCH_FAVOURITES:
      return { ...state, favourites: action.favourites };
    case FETCH_FAVORITES_ERROR:
      return { ...state, error: action.error };
    case REMOVE_FAV_ERROR:
      /* eslint-disable */
      delete state.error;
      return state;
    default:
      return state;
  }
};

export default favouriteReducer;
