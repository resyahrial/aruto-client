const initialState = {
  arts: [],
  isLoading: false,
  error: null,
};

// name rule for type dispatch => <reducer_name>/<action>
// ex: arts/fetch, arts/add, users/login
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "arts/fetch":
      return { ...state, arts: payload };

    default:
      return state;
  }
};

export default reducer;
