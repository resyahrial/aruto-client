export const setToCart = (payload) => (dispatch, getState) => {
  const state = getState().carts.data;
  const isExist =
    state.filter((cart) => {
      return cart.id === payload.id && cart.item === payload.item;
    }).length > 0;

  if (!isExist) {
    dispatch({ type: "carts/add", payload });
  }
};

export const deleteCart = (payload) => (dispatch, getState) => {
  const state = getState().carts.data;
  const filteredItem = state.filter(
    (cart) => cart.id !== payload.id || cart.item !== payload.item
  );
  dispatch({ type: "carts/deleteItem", payload: filteredItem });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: "carts/clear" });
};
