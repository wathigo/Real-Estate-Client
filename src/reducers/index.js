import { combineReducers } from 'redux';
import userReducer from './user';
import categoryReducer from './category';
import propertyReducer from './property';
import loadingReducer from './loading';
import favouriteReducer from './favourite';
import syncInfo from './sync_info';
import showProperty from './show_property';
import scrollReducer from './current_scroll';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  spin: loadingReducer,
  properties: propertyReducer,
  favourites: favouriteReducer,
  syncInfomation: syncInfo,
  currentProperty: showProperty,
  scroll: scrollReducer,
});

export default rootReducer;
