import _ from 'lodash';

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
    const { payload: post } = action;
    return { ...state, isLoading: false, post };
  }

  if (action.type === "POST/CREATE_FULFILLED") {
    const { data: post } = action.payload;
    let posts = [ ...state.posts, post ];
    return { ...state, isLoading: false, posts }
  }

  if (action.type === "POST/UPDATE_FULFILLED") {
    const { data: post } = action.payload;
    let { posts } = { ...state }
    const removedOldData = _.remove(posts, (n) => {
      return n.id !== post.id;
    });
    let newPosts = [ ...removedOldData, post ];
    return { ...state, isLoading: false, posts: newPosts }
  }

  if (action.type === "POST/DELETE_FULFILLED") {
    const { post: metaPost } = action.meta;
    let { posts } = { ...state }
    const deletedData = _.remove(posts, (n) => {
      return n.id !== metaPost.id
    });
    return { ...state, isLoading: false, posts: deletedData }
  }

  return state;
};

export default postsReducer;
