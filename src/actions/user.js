import axios from 'axios';
import _ from 'lodash';

export const loadAll = () => {
  return {
    type: "USER/LOAD_ALL",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/users`
    ).then(res => {
      return res.data;
    }).catch(err => console.log('err: ', err))
  };
};

export const loadUserById = (id) => {
  return {
    type: "USER/LOAD_USER_BY_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/users`
    ).then(res => {
      const { data } = res;
      const user = _.find(data, { 'id': parseInt(id) });
      return user;
    }).catch(err => console.log('err: ', err))
  };
};
