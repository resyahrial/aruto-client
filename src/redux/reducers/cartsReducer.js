const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// name rule for type dispatch => <reducer_name>/<action>
// ex: arts/fetch, arts/add, users/login
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "carts/isLoading":
      return { ...state, isLoading: payload };
    case "carts/error":
      return { ...state, error: payload };
    case "carts/add":
      return { ...state, data: [...state.data, payload] };
    case "carts/deleteItem":
      // console.log(payload);
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default reducer;
