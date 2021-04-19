const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "users/setUsers":
      return { ...state, users: payload };
    case "users/register":
      return { ...state, ...payload };
    case "users/isLoading":
      return { ...state, isLoading: !state.isLoading };
    case "users/error":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
