import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import "../assets/style/style.css";
import { SideLeft } from "../components";
import {login} from '../redux/actions/users'
import { useHistory } from 'react-router-dom'
export default function Login() {
  const history=useHistory()
  const dispatch=useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const { isLoading, error } = useSelector((state) => state.users);
  const onSubmit = (e) => {
    e.preventDefault();
    if(email !=='' && password !==''){
      dispatch(login({email:email,password:password}))
    }
  }
  useEffect(()=>{
    if(!isLoading && localStorage.access_token) history.push('/')
  },[isLoading])
  return (
    <div className="container-fluid mx-0 px-0">
      <div className="row">
        <SideLeft />
        <div className="col-6">
          <div className="mx-5 mt-2 mb-5">
            <div className="mt-0 mb-3 pb-0 pt-5">
              <h1 className="font-weight-bold text-left">
                Hello, <br />
                Welcome Back
              </h1>
            </div>
            <div className="mt-5 pt-5 col-12 col-md-12">
              <form className="mt-0 w-100" onSubmit={(e)=>onSubmit(e)}>
                <div className="input-div">
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="w-75 " src='/images/user.svg' alt="user" />
                  </div>
                  <div>
                    <input placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} type="email" className="input" />
                  </div>
                </div>
                <div className="input-div">
                  <div className="d-flex justify-content-center height-icon align-items-center">
                    <img className="w-75 " src="/images/icon-pass.svg" alt="password" />
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      type="password"
                      className="input"
                      required onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-theme-blue text-white mt-5"
                >
                  Login
                </button>
                <p className="mt-5">
                  Don't have an account?
                  <Link to="/register" className="pr-2 text-primary font-weight-bold"> Sign up </Link>
                </p>
                <p className="mt-2">  or back to <Link to="/">Home ?</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
