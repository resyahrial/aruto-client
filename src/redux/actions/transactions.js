import axios from "../axios";

export const checkout = (payload) => (dispatch) => {
  dispatch({ type: "transactions/isLoading", payload: true });
  axios
    .post(
      "/transaction",
      { ...payload },
      {
        headers: {
          access_token: localStorage.access_token,
        },
      }
    )
    .then(({ data }) => {
      dispatch({ type: "transactions/checkout", payload: data });
    })
    .catch((err) => dispatch({ type: "transactions/error", payload: err }))
    .finally(() =>
      dispatch({ type: "transactions/isLoading", payload: false })
    );
};

export const fetchTransactionHistory = (payload) => (dispatch) => {
  axios("/transaction/history", {
    headers: {
      access_token: localStorage.access_token,
    },
  })
    .then(({ data }) =>
      dispatch({ type: "transactions/history", payload: data })
    )
    .catch((err) => dispatch({ type: "transactions/error", payload: err }));
};
