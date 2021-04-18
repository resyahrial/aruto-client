const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// name rule for type dispatch => <reducer_name>/<action>
// ex: arts/fetch, arts/add, users/login
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "users/register":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
