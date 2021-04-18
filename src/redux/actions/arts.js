import axios from "../axios";

function setArts(payload) {
  return {type: "arts/fetch", payload}
}
function setLoading(payload) {
  return {type: "loading/setLoading", payload}
}
function setError(payload) {
  return {type: "error/setError", payload}
}
export function fetchArt() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios.get("/arts")
      .then(({data}) => {
        dispatch(setArts(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .then(()=> {
        dispatch(setLoading(true))
      })
  }
}