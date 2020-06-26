export const loading = value => ({
  type: 'LOADING',
  isLoading: value,
});

export const syncInfo = info => ({
  type: 'SYNC_ACTION_IN_PROGRESS',
  info,
});

export const removeFavouritesError = () => ({
  type: 'REMOVE_FAV_ERROR',
});

export const showProperty = property => ({
  type: 'SHOW_PROPERTY',
  property,
});

export const currentScroll = scroll => ({
  type: 'CURRENT_SCROLL',
  scroll,
});

const logOut = () => ({
  type: 'LOG_OUT',
});

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  user: userObj,
});

const loginError = msg => ({
  type: 'LOGIN_ERROR',
  msg,
});

const fetchCategoriesSuccess = categories => ({
  type: 'FETCH_CATEGORIES',
  categories,
});

const fetchCategoriesError = error => ({
  type: 'FETCH_CATEGORIES_ERROR',
  error,
});

const fetchPropertiesSuccess = properties => ({
  type: 'FETCH_PROPERTIES',
  properties,
});

const fetchPropertiesError = error => ({
  type: 'FETCH_PROPERTIES_ERROR',
  error,
});

const addFavourite = favourite => ({
  type: 'ADD_FAVOURITE',
  favourite,
});

const addFavouriteError = error => ({
  type: 'ADD_FAVOURITE_ERROR',
  error,
});

const fetchFavourites = favourites => ({
  type: 'FETCH_FAVOURITES',
  favourites,
});

const fetchFavouritesError = error => ({
  type: 'FETCH_FAVORITES_ERROR',
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
    } else {
      document.cookie = `${data.auth_token}`;
      dispatch(loginUser(data.current_user));
      dispatch(loading(false));
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

export const addToFavourites = property_id => {
  const payload = { id: property_id };
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
    console.log(data);
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
  console.log('Fetch favourites initiated');
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
      dispatch(fetchFavouritesError(data.error));
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