const initialState = {
  data: [],
  userDataById: {},
  isLoading: false,
  error: null,
};

// name rule for type dispatch => <reducer_name>/<action>
// ex: arts/fetch, arts/add, users/login
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
