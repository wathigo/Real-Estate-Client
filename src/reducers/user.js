const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.user}
        case 'LOGIN_ERROR':
            return {...state, error: action.msg}
        default:
            return state || false 
    }
};

export default userReducer;