import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';
import propertyReducer from './property';
import loadingReducer from './loading';

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    spin: loadingReducer,
    properties: propertyReducer,
})

export default rootReducer;