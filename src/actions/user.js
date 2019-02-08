import axios from 'axios';

export const loadAll = () => {
  return {
    type: "USER/LOAD_ALL",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/users`
      ).then(res => {
        return res.data;
      }).catch(err => console.log('err: ', err))
  }
}
