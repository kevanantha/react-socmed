import axios from 'axios';

export const loadAllPostByUserId = id => {
  return {
    type: "POST/LOAD_ALL_POST_BY_USER_ID",
      payload: axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    ).then(res => {
      return res.data;
    }).catch(err => console.log('err: ', err))
  };
};

export const loadPostByUserId = id => {
  return {
    type: "POST/LOAD_POST_BY_USER_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(res => {
			return res.data;
    }).catch(err => console.log('err: ', err))
  };
};

export const create = post => {
  return {
    type: "POST/CREATE",
    payload: axios.post(
      `https://jsonplaceholder.typicode.com/posts`, post
    )
  };
};

export const update = (post, editedPost) => {
  return {
    type: "POST/UPDATE",
    payload: axios.put(
      `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`, post
    )
  };
};

export const destroy = post => {
  return {
    type: "POST/DELETE",
    payload: axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    ),
    meta: {
      post
    }
  };
};
