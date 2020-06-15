export const createUser = user => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://fun-real-estate-api.herokuapp.com/auth/signup";
    return dispatch => {
      return fetch(proxyUrl + url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({user: user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            dispatch(loginError(data.error))
          } else {
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      logged_in: true,
  })

  const loginError = msg => ({
      type: 'LOGIN_ERROR',
      msg: 'msg'
  })
  