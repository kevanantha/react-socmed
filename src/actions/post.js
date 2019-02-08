import axios from 'axios';

export const loadAll = () => {
  return {
    type: "POST/LOAD_ALL",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/posts`
      ).then(res => {
        return res.data;
      }).catch(err => console.log('err: ', err))
  }
}
