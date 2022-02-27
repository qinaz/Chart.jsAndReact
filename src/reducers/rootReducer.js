import { combineReducers } from 'redux';
import appleReducer from './appleReducer';

const rootReducer = combineReducers({
  apple: appleReducer,
});

export default rootReducer;
