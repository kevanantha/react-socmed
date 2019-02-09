import axios from 'axios';

export const loadAllPhotosByAlbumId = id => {
  return {
    type: "PHOTO/LOAD_ALL_PHOTOS_BY_ALBUM_ID",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    ).then(res => {
			return res.data;
    }).catch(err => console.log('err: ', err))
  };
};
