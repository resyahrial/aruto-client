const initialState = {
  data: [],
  dataById: {},
  arts: [],
  search: "",
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "arts/fetch":
      return { ...state, data: payload };
    case "arts/loading":
      return { ...state, isLoading: payload };
    case "arts/error":
      return { ...state, error: payload };
    case "arts/fetchById":
      return { ...state, dataById: payload };
    case "arts/search":
      return { ...state, search: payload };
    default:
      return state;
  }
};

export default reducer;
