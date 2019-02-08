import { ActionType } from 'redux-promise-middleware'

const initState = {
  posts: [],
  isLoading: false
};

const postsReducer = (state = initState, action) => {
  if (action.type === `POST/LOAD_ALL_${ActionType.Pending}`) {
    return { ...state, isLoading: true };
  }

  if (action.type === `POST/LOAD_ALL_${ActionType.Fulfilled}`) {
    const { payload: posts } = action;
    console.log(posts);
    return { ...state, isLoading: false, posts };
  }

  return state;
}

export default postsReducer;
