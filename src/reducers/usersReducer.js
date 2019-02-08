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

  return state;
}

export default usersReducer;
