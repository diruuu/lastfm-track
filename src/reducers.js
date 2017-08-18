import { combineReducers } from 'redux';
import homeReducer from './containers/home/reducer';
import artistReducer from './containers/artist/reducer';

export default combineReducers({
  homeState: homeReducer,
  artistState: artistReducer,
});
