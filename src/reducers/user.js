const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return action.logged_in
        default:
            return state || false 
    }
};

export default userReducer;