import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

export default combineReducers({
  form,
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
  photos: photosReducer
});
