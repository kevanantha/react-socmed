const initState = {
  posts: [],
  isLoading: false
};

const postsReducer = (state = initState, action) => {
  if (action.type === "POST/LOAD_ALL_POST_BY_USER_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "POST/LOAD_ALL_POST_BY_USER_ID_FULFILLED") {
    const { payload: posts } = action;
    return { ...state, isLoading: false, posts };
  }

  if (action.type === "POST/LOAD_POST_BY_USER_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "POST/LOAD_POST_BY_USER_ID_FULFILLED") {
    const { payload: posts } = action;
    return { ...state, isLoading: false, posts };
  }

  return state;
}

export default postsReducer;
