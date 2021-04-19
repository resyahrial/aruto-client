import axios from "../axios";

function setUsers(payload) {
  return { type: "users/setUsers", payload };
}

export const fetchUserById = (payload) => (dispatch) => {
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

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: "users/isLoading", payload: true });
    axios
      .get("/users")
      .then(({ data }) => {
        dispatch(setUsers(data));
      })
      .catch((err) => dispatch({ type: "users/error", payload: err }))
      .then(() => dispatch({ type: "users/isLoading", payload: false }));
  };
}

export const login = (payload) => (dispatch) => {
  const data = {
    email: payload.email,
    password: payload.password,
  };
  dispatch({ type: "users/isLoading", payload: true });
  axios
    .post(`/login`, data)
    .then((res) => {
      console.log(res, "res");
      localStorage.setItem("access_token", res.data.access_token);
    })
    .catch((err) => dispatch({ type: "users/error", payload: err }))
    .finally(() => {
      dispatch({ type: "users/isLoading", payload: false });
    });
};

export const register = (payload) => (dispatch) => {
  const data = {
    full_name: payload.fullname,
    username: payload.username,
    email: payload.email,
    password: payload.password,
  };
  dispatch({ type: "users/isLoading", payload: true });
  axios
    .post(`/register`, data)
    .then((res) => {})
    .catch((err) => dispatch({ type: "users/error" }, err))
    .finally(() => {
      dispatch({ type: "users/isLoading", payload: false });
    });
};
