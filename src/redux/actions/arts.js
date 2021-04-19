import axios from "../axios";
// const baseURL = "http://localhost:4000";

// export const fetchArts = (payload) => (dispatch) => {
//   dispatch({ type: "arts/loading", payload: true });
//   axios({
//     method: "GET",
//     url: baseURL + "/arts",
//   })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))
//     .finally((_) => dispatch({ type: "arts/loading", payload: false }));
// };

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

function setArts(payload) {
  return { type: "arts/fetch", payload };
}
function setLoading(payload) {
  return { type: "loading/setLoading", payload };
}
function setError(payload) {
  return { type: "error/setError", payload };
}
export function setCategory(payload) {
  console.log("action set category");
  return { type: "category/setCategory", payload };
}
export function fetchArt() {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get("/arts")
      .then(({ data }) => {
        dispatch(setArts(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .then(() => {
        dispatch(setLoading(false));
      });
  };
}
