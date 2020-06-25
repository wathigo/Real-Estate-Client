import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';
import propertyReducer from './property';
import loadingReducer from './loading';
import favouriteReducer from './favourite';
import syncInfo from './sync_info'

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    spin: loadingReducer,
    properties: propertyReducer,
    favourites: favouriteReducer,
    sync_info: syncInfo,
})

export default rootReducer;