import { LOADING } from '../actions/types';

const loadingReducer = (state = true, { type, payload }) => (type === LOADING ? payload : state);

export default loadingReducer;
