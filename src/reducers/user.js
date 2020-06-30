import { LOGIN_USER, LOGIN_ERROR, LOG_OUT } from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.user };
    case LOGIN_ERROR:
      return { ...state, error: action.msg };
    case LOG_OUT:
      return {};
    default:
      return state || false;
  }
};

export default userReducer;
