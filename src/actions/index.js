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
        localStorage.setItem("token", data.auth_token);
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
        localStorage.setItem("token", data.auth_token);
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
      const data = await resp.json();
      console.log(data)
      dispatch(fetchCategoriesSuccess(data));
      dispatch(loading(false));
    }
  }

  export const fetchProperties = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-rails-api.herokuapp.com//properties";
    return async dispatch => {
      const resp = await fetch(proxyUrl + url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      const data = await resp.json();
      console.log(data)
      dispatch(fetchPropertiesSuccess(data));
      dispatch(loading(false)); 
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

  const fetchPropertiesSuccess = (properties) => ({
    type: 'FETCH_PROPERTIES',
    properties: properties,
  })
  