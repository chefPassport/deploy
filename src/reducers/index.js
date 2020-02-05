import { combineReducers } from 'redux';
import { chefReducer } from './chefReducer';
import { viewerReducer } from './viewerReducer';

export default combineReducers({
    chefReducer,
    viewerReducer
});