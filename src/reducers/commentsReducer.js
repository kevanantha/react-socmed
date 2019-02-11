import _ from 'lodash';

const initState = {
  comments: [],
  isLoading: false
};

const commentsReducer = (state = initState, action) => {
  if (action.type === "COMMENT/LOAD_ALL_COMMENTS_BY_USER_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "COMMENT/LOAD_ALL_COMMENTS_BY_USER_ID_FULFILLED") {
    const { payload: comments } = action;
    return { ...state, isLoading: false, comments };
  }

  if (action.type === "COMMENT/CREATE_FULFILLED") {
    const { data: comment } = action.payload;
    let comments = [ ...state.comments, comment ];
    return { ...state, isLoading: false, comments }
  }

  if (action.type === "COMMENT/UPDATE_FULFILLED") {
    const { data: comment } = action.payload;
    let { comments } = { ...state }
    const removedOldData = _.remove(comments, (n) => {
      return n.id !== comment.id;
    });
    let newComments = [ ...removedOldData, comment ];
    return { ...state, isLoading: false, comments: newComments }
  }

  if (action.type === "COMMENT/DELETE_FULFILLED") {
    const { comment: metaComment } = action.meta;
    let { comments } = { ...state }
    const deletedData = _.remove(comments, (n) => {
      return n.id !== metaComment.id
    });
    return { ...state, isLoading: false, comments: deletedData }
  }

  return state;
}

export default commentsReducer;
