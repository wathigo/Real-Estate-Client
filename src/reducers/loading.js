const loadingReducer = (state = true, action) => {
    switch(action.type) {
        case 'LOADING':
            return action.isLoading
        default:
            return true
    }
};

export default loadingReducer;