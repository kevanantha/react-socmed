const initState = {
  photos: [],
  isLoading: false
};

const photosReducer = (state = initState, action) => {
  if (action.type === "PHOTO/LOAD_ALL_PHOTOS_BY_ALBUM_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "PHOTO/LOAD_ALL_PHOTOS_BY_ALBUM_ID_FULFILLED") {
    const { payload: photos } = action;
    return { ...state, isLoading: false, photos };
  }

  /* if (action.type === "PHOTO/LOAD_PHOTOS_BY_ALBUM_ID_PENDING") { */
  /*   return { ...state, isLoading: true }; */
  /* } */
  /* if (action.type === "PHOTO/LOAD_PHOTOS_BY_ALBUM_ID_FULFILLED") { */
  /*   const { payload: photos } = action; */
  /*   return { ...state, isLoading: false, photos }; */
  /* } */

  return state;
}

export default photosReducer;
