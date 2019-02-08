import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import usersReducer from './usersReducer';

export default combineReducers({
  form,
  users: usersReducer
});
