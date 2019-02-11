import axios from 'axios';

export const loadAllCommentsByUserId = id => {
  return {
    type: "COMMENT/LOAD_ALL_COMMENTS_BY_USER_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    ).then(res => {
      return res.data;
    }).catch(err => console.lg('err: ', err))
  };
};

export const create = comment => {
  return {
    type: "COMMENT/CREATE",
    payload: axios.post(
      `https://jsonplaceholder.typicode.com/comments?postId=${comment.postId}`, comment
    )
  };
};

export const update = (comment, editedComment) => {
  return {
    type: "COMMENT/UPDATE",
    payload: axios.put(
      `https://jsonplaceholder.typicode.com/comments/${editedComment.postId}`, comment
    )
  };
};

export const destroy = comment => {
  return {
    type: "COMMENT/DELETE",
    payload: axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${comment.id}`
    ),
    meta: {
      comment
    }
  };
};
