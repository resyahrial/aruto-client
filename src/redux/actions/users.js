import axios from "../axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
      .finally(() => dispatch({ type: "users/isLoading", payload: false }));
  };
}

export const login = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: "users/isLoading", payload: true });
  axios
    .post(`/login`, payload)
    .then(({ data }) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("_id", data._id);
      localStorage.setItem("fullname", data.full_name);
    })
    .catch((err) => {
      dispatch({ type: "users/error", payload: err });
      MySwal.fire("Invalid Email / Password", "Please try again!", "error");
    })
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
