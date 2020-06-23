import { compose } from "redux";

export const createUser = user => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com/auth/signup";
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({user: user}),
      });
      const data = await resp.json();
      if (data.error) {
        dispatch(loginError(data.error));
        dispatch(loading(false))
      }
      else {
        document.cookie = `${data.auth_token}`;
        dispatch(loginUser(data.current_user));
        dispatch(loading(false))
      }
    }
  }

 
  export const signIn = user => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com/authenticate";
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(user),
      });
      const data = await resp.json();
      if (data.error) {
        dispatch(loginError(data.error));
        dispatch(loading(false))
      }
      else {
        document.cookie = `${data.auth_token}`;
        dispatch(loginUser(data.current_user));
        dispatch(loading(false))
      }
    }
  }

  export const fetchCategories = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com/categories";
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      try {
        const data = await resp.json();
        console.log(data)
        dispatch(fetchCategoriesSuccess(data));
      }
      catch(error) {
        dispatch(fetchCategoriesError(error))
      }      
    }
  }

  export const fetchProperties = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com/properties";
    console.log("Fetch Properties Initiated")
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      try {
        const data = await resp.json();
        console.log(data)
        dispatch(fetchPropertiesSuccess(data));
      }
      catch(error) {
        dispatch(fetchPropertiesError(error))
      }
      
    }
  }

  export const addToFavourites = (payload) => {
    payload = { id: payload };
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com/add_favourites";
    const token = document.cookie;
    console.log("Add to favourite Initiated")
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(payload)
      });
      const data = await resp.json();
      console.log(data)
      if(data.error) {
        dispatch(addFavouriteError(data.error));
      }else {
        dispatch(addFavourite(data.favourite));
        dispatch(loginUser(data.user));
      }      
    }
  }

  export const loading = (value)  => ({
    type: 'LOADING',
    isLoading: value,
  })
  
  const loginUser = (userObj) => ({
      type: 'LOGIN_USER',
      user: userObj,
  })

  const loginError = msg => ({
      type: 'LOGIN_ERROR',
      msg: msg
  })

  const fetchCategoriesSuccess = (categories) => ({
    type: 'FETCH_CATEGORIES',
    categories: categories,
  })

  const fetchCategoriesError = (error) => ({
    type: 'FETCH_CATEGORIES_ERROR',
    error: error,
  })

  const fetchPropertiesSuccess = (properties) => ({
    type: 'FETCH_PROPERTIES',
    properties: properties,
  })

  const fetchPropertiesError = (error) => ({
    type: 'FETCH_PROPERTIES_ERROR',
    error: error,
  })

  const addFavourite = (favourite) => ({
    type: 'ADD_FAVOURITE',
    favourite: favourite,
  })

  const addFavouriteError = (error) => ({
    type: 'ADD_FAVOURITE_ERROR',
    error: error,
  })
  