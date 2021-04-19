import axios from "../axios";
// const baseURL = "http://localhost:4000";

export const fetchUserById = (payload) => (dispatch) => {
  //   console.log(payload);
  const headers = {
    "Content-Type": "application/json",
    access_token: payload,
  };
  dispatch({ type: "users/isLoading", payload: true });
  axios("/user", { headers })
    .then((response) =>
      dispatch({ type: "users/fetchById", payload: response })
    )
    .catch((err) => dispatch({ type: "users/error", payload: err }))
    .finally((_) => dispatch({ type: "users/isLoading", payload: false }));
};

// export const fetchArts = (payload) => (dispatch) => {
// code
// };
