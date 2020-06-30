import * as ActionTypes from './types';

export const loading = value => ({
  type: ActionTypes.LOADING,
  payload: value,
});

export const syncInfo = info => ({
  type: ActionTypes.SYNC_ACTION_IN_PROGRESS,
  info,
});

export const removeFavouritesError = () => ({
  type: ActionTypes.REMOVE_FAV_ERROR,
});

export const showProperty = property => ({
  type: ActionTypes.SHOW_PROPERTY,
  property,
});

export const currentScroll = scroll => ({
  type: ActionTypes.CURRENT_SCROLL,
  scroll,
});

const logOut = () => ({
  type: ActionTypes.LOG_OUT,
});

const loginUser = userObj => ({
  type: ActionTypes.LOGIN_USER,
  user: userObj,
});

const loginError = msg => ({
  type: ActionTypes.LOGIN_ERROR,
  msg,
});

const fetchCategoriesSuccess = categories => ({
  type: ActionTypes.FETCH_CATEGORIES,
  categories,
});

const fetchCategoriesError = error => ({
  type: ActionTypes.FETCH_CATEGORIES_ERROR,
  error,
});

const fetchPropertiesSuccess = properties => ({
  type: ActionTypes.FETCH_PROPERTIES,
  properties,
});

const fetchPropertiesError = error => ({
  type: ActionTypes.FETCH_PROPERTIES_ERROR,
  error,
});

const addFavourite = favourite => ({
  type: ActionTypes.ADD_FAVOURITE,
  favourite,
});

const addFavouriteError = error => ({
  type: ActionTypes.ADD_FAVOURITE_ERROR,
  error,
});

const fetchFavourites = favourites => ({
  type: ActionTypes.FETCH_FAVOURITES,
  favourites,
});

export const fetchFavouritesError = error => ({
  type: ActionTypes.FETCH_FAVORITES_ERROR,
  error,
});

export const createUser = user => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/auth/signup';
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ user }),
    });
    const data = await resp.json();
    if (data.error) {
      dispatch(loginError(data.error));
      dispatch(loading(false));
      dispatch(syncInfo('Ooops, something went wrong', data.error));
      setTimeout(() => {
        dispatch(syncInfo(''));
      }, 1000);
    } else {
      document.cookie = `${data.auth_token}`;
      dispatch(loginUser(data.current_user));
      dispatch(loading(false));
      dispatch(syncInfo('Account Created!'));
      setTimeout(() => {
        dispatch(syncInfo(''));
      }, 1000);
    }
  };
};

export const signIn = user => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/authenticate';
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(user),
    });
    const data = await resp.json();
    if (data.error) {
      dispatch(loginError(data.error));
      dispatch(loading(false));
      dispatch(syncInfo('Something went wrong! Please try again'));
      setTimeout(() => {
        dispatch(syncInfo(''));
      }, 1000);
    } else {
      document.cookie = `${data.auth_token}`;
      dispatch(loginUser(data.current_user));
      dispatch(loading(false));
      dispatch(syncInfo('User logged in successfully'));
      setTimeout(() => {
        dispatch(syncInfo(''));
      }, 1000);
    }
  };
};

export const fetchCategories = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/categories';
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    try {
      const data = await resp.json();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesError(error));
    }
  };
};

export const fetchProperties = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/properties';
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    try {
      const data = await resp.json();
      dispatch(fetchPropertiesSuccess(data));
    } catch (error) {
      dispatch(fetchPropertiesError(error));
    }
  };
};

export const addToFavourites = propertyId => {
  const payload = { id: propertyId };
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/add_favourites';
  const token = document.cookie;
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(payload),
    });
    const data = await resp.json();
    if (data.error) {
      dispatch(syncInfo(''));
      dispatch(addFavouriteError(data.error));
    } else {
      dispatch(syncInfo('Added to favourites'));
      setTimeout(() => {
        dispatch(syncInfo(''));
      }, 1000);
      dispatch(addFavourite(data.favourite));
      dispatch(loginUser(data.user));
      dispatch(fetchFavourites(data.favourites));
    }
  };
};

export const fetchAllFavourites = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fun-rails-api.herokuapp.com/my_favourites';
  const token = document.cookie;
  return async dispatch => {
    const resp = await fetch(proxyUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        'Access-Control-Allow-Origin': '*',
      },
    });
    const data = await resp.json();
    if (data.error) {
      dispatch(removeFavouritesError());
    } else {
      dispatch(fetchFavourites(data.properties));
      dispatch(loginUser(data.user));
      dispatch(loading(false));
    }
  };
};

export const logOutUser = () => dispatch => {
  document.cookie = 'invalid';
  dispatch(logOut());
};
