const initialState = {
  data: [],
  userDataById: {},
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
    case "users/fetchById":
      return { ...state, userDataById: payload };
    case "users/isLoading":
      return { ...state, isLoading: payload };
    case "users/error":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
