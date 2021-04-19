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

// export const fetchArts = (payload) => (dispatch) => {
// code
// };
