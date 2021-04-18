import axios from "../axios";

// export const fetchArts = (payload) => (dispatch) => {
// code
// };
function setCategories(payload) {
  return {type: "category/setCategory", payload}
}
function setLoading(payload) {
  return {type: "loading/setLoading", payload}
}
function setError(payload) {
  return {type: "error/setError", payload}
}
export function fetchCategories() {
  return (dispatch) => {
    setLoading(true)
    axios.get('/categories')
      .then(({data}) => {
        console.log(data)
        dispatch(setCategories(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .then(() => {
        dispatch(setLoading(false))
      })
  }
}
