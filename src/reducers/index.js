import {combineReducers} from 'redux';
import fetchPostReducer from './fetchPostReducer';

export default combineReducers({
    posts: fetchPostReducer
})