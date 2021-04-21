import axios from "../axios";

export const fetchArtsById = (payload) => (dispatch) => {
  dispatch({ type: "arts/loading", payload: true });
  axios({
    method: "GET",
    url: "/arts/" + payload,
  })
    .then((response) =>
      dispatch({ type: "arts/fetchById", payload: response.data })
    )
    .catch((err) => dispatch({ type: "arts/error", payload: err }))
    .finally((_) => dispatch({ type: "arts/loading", payload: false }));
};

export function setCategory(payload) {
  return { type: "category/setCategory", payload };
}

export function fetchArt() {
  return (dispatch) => {
    dispatch({ type: "arts/loading", payload: true });
    axios("/arts")
      .then(({ data }) => dispatch({ type: "arts/fetch", payload: data }))
      .catch((err) => dispatch({ type: "arts/error", payload: err }))
      .finally(() => dispatch({ type: "arts/loading", payload: false }));
  };
}

export const addFavorite = (payload) => (dispatch) => {
  // console.log(payload, "payload fav");
  // dispatch({ type: "arts/loading", payload: true });
  axios
    .patch(`/arts/${payload}/like`, null, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
    .then((data) => {
      console.log("berhasil");
      return axios("/arts");
    })
    .then(({ data }) => dispatch({ type: "arts/fetch", payload: data }))
    .catch((err) => console.log(err.response, "err"));
  // .finally((_) => dispatch({ type: "arts/loading", payload: false }));
};

export const addArt = (payload) => (dispatch) => {
  dispatch({ type: "arts/loading", payload: true });
  axios
    .post("/arts", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    })
    .then(({ data }) => {
      return axios("/arts");
    })
    .then(({ data }) => {
      dispatch({ type: "arts/fetch", payload: data });
      return axios("/user", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    })
    .then(({ data }) => dispatch({ type: "users/fetchById", payload: data }))
    .catch((err) => dispatch({ type: "arts/error", payload: err }))
    .finally((_) => dispatch({ type: "arts/loading", payload: false }));
};

export const deleteArt = (payload) => (dispatch) => {
  // console.log(payload);
  dispatch({ type: "arts/loading", payload: true });
  axios
    .delete(`/arts/${payload}`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
    .then(({ data }) => {
      return axios("/arts");
    })
    .then(({ data }) => {
      dispatch({ type: "arts/fetch", payload: data });
      return axios("/user", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    })
    .then(({ data }) => dispatch({ type: "users/fetchById", payload: data }))
    .catch((err) => dispatch({ type: "arts/error", payload: err }))
    .finally((_) => dispatch({ type: "arts/loading", payload: false }));
};
