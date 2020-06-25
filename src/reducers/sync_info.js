const syncInfo = (state = '', action) => {
    switch(action.type) {
        case 'SYNC_ACTION_IN_PROGRESS':
            return action.info
        default:
            return state
    }
};

export default syncInfo;