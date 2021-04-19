import axios from "../axios";

// export const fetchArts = (payload) => (dispatch) => {
// code
// };
function setUsers(payload) {
  return {type: "users/setUsers", payload}
}
function setLoading(payload) {
  return {type: "loading/setLoading", payload}
}
function setError(payload) {
  return {type: "error/setError", payload}
}
export function fetchUser() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios.get('/users')
      .then(({data}) => {
        dispatch(setUsers(data))
      })
      .catch(err => dispatch(setError(err)))
      .then(() => dispatch(setLoading(false)))
  }
}