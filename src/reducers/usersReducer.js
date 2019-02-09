const initState = {
  users: [],
  isLoading: false
};

const usersReducer = (state = initState, action) => {
  if (action.type === "USER/LOAD_ALL_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "USER/LOAD_ALL_FULFILLED") {
    const { payload: users } = action;
    return { ...state, isLoading: false, users };
  }

  if (action.type === "USER/LOAD_USER_BY_ID_PENDING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "USER/LOAD_USER_BY_ID_FULFILLED") {
    const { payload: user } = action;
    return { ...state, isLoading: false, user };
  }

  return state;
}

export default usersReducer;
