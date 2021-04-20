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

export const paid = (payload) => (dispatch) => {
  dispatch({ type: "transactions/isLoading", payload: true });
  axios
    .post(
      "/transaction/success",
      {
        transactionId: payload,
      },
      {
        headers: {
          access_token: localStorage.access_token,
        },
      }
    )
    .then(() => {
      dispatch({ type: "transactions/checkout", payload: "" });
    })
    .catch((err) => dispatch({ type: "transactions/error", payload: err }))
    .finally(() =>
      dispatch({ type: "transactions/isLoading", payload: false })
    );
};
