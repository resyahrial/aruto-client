import axios from "../axios";

export const login = (payload) => (dispatch) => {
    const data = {
        email:payload.email,
        password:payload.password
      }
      dispatch({ type: "users/isLoading" });
      axios
      .post(`${process.env.REACT_APP_URL}login`,data)
      .then(res=>{
          console.log(res,'res');
          localStorage.setItem('access_token', res.data.access_token)
      })
      .catch(err=>  dispatch({ type: "users/error" }, err))
      .finally(() => {
        dispatch({ type: "users/isLoading" });
      });
};
