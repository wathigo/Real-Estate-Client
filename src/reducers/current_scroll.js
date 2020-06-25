const scrollReducer = (state = 0, action) => {
    switch(action.type) {
        case 'CURRENT_SCROLL':
            return action.scroll
        default:
            return state
    }
};

export default scrollReducer;