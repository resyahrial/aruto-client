import axios from "../axios";

export const checkout = () => (dispatch) => {
  dispatch({ type: "transactions/isLoading", payload: true });
  axios
    .post(
      "/transaction",
      {
        arts: [
          {
            id: "607de8cfc9fe3d1cf4106ed7",
            item: "T-Shirt",
            size: "XL",
            color: "white",
            position: {
              left: 200,
              top: 200,
            },
            quantity: 2,
          },
        ],
        gross_amount: 100000,
        address: "Jakarta",
      },
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
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdiZmE1ZjhhYTMwZWVkNDlkMDdkMjQiLCJlbWFpbCI6InJpb0BtYWlsLmNvbSIsImlhdCI6MTYxODc1NTQyOH0.iOsV8zc1bIe_lywsevYv8rd0A3ZeAAV-xybJhiV1hdY",
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
