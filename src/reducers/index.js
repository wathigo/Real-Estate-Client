import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';
import loadingReducer from './loading';

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    isLoading: loadingReducer,
})

export default rootReducer;