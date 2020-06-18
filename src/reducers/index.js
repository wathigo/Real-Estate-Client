import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
})

export default rootReducer;