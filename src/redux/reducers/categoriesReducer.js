const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

// name rule for type dispatch => <reducer_name>/<action>
// ex: arts/fetch, arts/add, users/login
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "category/setCategory":
      return { ...state, categories: payload };
    case "loading/setLoading":
      return { ...state, isLoading: payload };
    case "error/setError":
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default reducer;
