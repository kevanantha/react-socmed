const initState = {
  albums: [],
  isLoading: false
};

const albumsReducer = (state = initState, action) => {
  if (action.type === "ALBUM/LOAD_ALL_ALBUM_BY_USER_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "ALBUM/LOAD_ALL_ALBUM_BY_USER_ID_FULFILLED") {
    const { payload: albums } = action;
    return { ...state, isLoading: false, albums };
  }

  if (action.type === "ALBUM/LOAD_ALBUM_BY_USER_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "ALBUM/LOAD_ALBUM_BY_USER_ID_FULFILLED") {
    const { payload: albums } = action;
    return { ...state, isLoading: false, albums };
  }

  return state;
}

export default albumsReducer;
