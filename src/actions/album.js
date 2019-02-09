import axios from 'axios';

export const loadAllAlbumByUserId = id => {
  return {
    type: "ALBUM/LOAD_ALL_ALBUM_BY_USER_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    ).then(res => {
      return res.data;
    }).catch(err => console.log('err: ', err))
  };
};

export const loadAlbumByUserId = id => {
  return {
    type: "ALBUM/LOAD_ALBUM_BY_USER_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    ).then(res => {
			return res.data;
    }).catch(err => console.log('err: ', err))
  };
};
