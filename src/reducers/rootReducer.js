import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import postsReducer from './postsReducer';

export default combineReducers({
  form,
  posts: postsReducer
});