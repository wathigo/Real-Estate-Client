const categoryReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_CATEGORIES':
            return {...state, categories: action.categories}
        case 'FETCH_CATEGORIES_ERROR':
            return {...state, error: action.error}
        default:
            return state 
    }
};

export default categoryReducer;