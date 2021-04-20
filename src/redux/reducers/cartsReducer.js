const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "carts/isLoading":
      return { ...state, isLoading: payload };
    case "carts/error":
      return { ...state, error: payload };
    case "carts/add":
      return { ...state, data: [...state.data, payload] };
    case "carts/deleteItem":
      return { ...state, data: payload };
    case "carts/clear":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default reducer;
