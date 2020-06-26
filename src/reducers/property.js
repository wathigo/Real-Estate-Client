import { act } from 'react-dom/test-utils';

const propertyReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROPERTIES':
      return { ...state, properties: action.properties };
    case 'FETCH_PROPERTIES_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default propertyReducer;
