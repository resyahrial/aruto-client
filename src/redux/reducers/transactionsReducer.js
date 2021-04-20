const initialState = {
  data: {},
  myHistory: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "transactions/checkout":
      return { ...state, data: payload };
    case "transactions/isLoading":
      return { ...state, isLoading: payload };
    case "transactions/error":
      return { ...state, error: payload };
    case "transactions/history":
      return { ...state, myHistory: payload };
    default:
      return state;
  }
};

export default reducer;
