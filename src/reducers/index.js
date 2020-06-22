import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';
import propertyReducer from './property';
import loadingReducer from './loading';
import favouriteReducer from './favourite';

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    spin: loadingReducer,
    properties: propertyReducer,
    favourites: favouriteReducer,
})

export default rootReducer;