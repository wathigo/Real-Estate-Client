const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'Loading':
            return action.loading
        default:
            return state || false
    }
};

export default loadingReducer;