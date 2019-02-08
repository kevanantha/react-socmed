import { ActionType } from 'redux-promise-middleware'

const initState = {
  users: [],
  isLoading: false
};

const usersReducer = (state = initState, action) => {
  if (action.type === `USER/LOAD_ALL_${ActionType.Pending}`) {
    return { ...state, isLoading: true };
  }

  if (action.type === `USER/LOAD_ALL_${ActionType.Fulfilled}`) {
    const { payload: users } = action;
    return { ...state, isLoading: false, users };
  }

  return state;
}

export default usersReducer;
