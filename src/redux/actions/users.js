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
      .catch(err=>  dispatch({ type: "users/error" ,payload:err}))
      .finally(() => {
        dispatch({ type: "users/isLoading" });
      });
};
export const register = (payload) => (dispatch) => {
  const data = {
    full_name:payload.fullname,
    username:payload.username,
      email:payload.email,
      password:payload.password,
   
    }
    console.log(data,'register');
    dispatch({ type: "users/isLoading" });
    axios
    .post(`${process.env.REACT_APP_URL}register`,data)
    .then(res=>{
    })
    .catch(err=>  dispatch({ type: "users/error" }, err))
    .finally(() => {
      // dispatch(login({email:payload.email,password:payload.password}))
      dispatch({ type: "users/isLoading" });
    });
};
