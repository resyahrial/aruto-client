import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "../assets/style/style.css";
import { SideLeft } from "../components";
import { login } from "../redux/actions/users";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.users);

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "" && data.password !== "") {
      dispatch(login(data));
    }
  };

  useEffect(() => {
    console.log(error);
    if (!isLoading && localStorage.access_token) history.push("/");
  }, [isLoading]);

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
              <form className="mt-0 w-100" onSubmit={(e) => onSubmit(e)}>
                <div className="input-div">
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="w-75 " src="/images/user.svg" alt="user" />
                  </div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      className="input"
                      required
                      onChange={onChange}
                      name="email"
                      value={data.email}
                    />
                  </div>
                </div>
                <div className="input-div">
                  <div className="d-flex justify-content-center height-icon align-items-center">
                    <img
                      className="w-75 "
                      src="/images/icon-pass.svg"
                      alt="password"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      type="password"
                      className="input"
                      required
                      onChange={onChange}
                      name="password"
                      value={data.password}
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
                  <Link
                    to="/register"
                    className="pr-2 text-primary font-weight-bold"
                  >
                    {" "}
                    Sign up{" "}
                  </Link>
                </p>
                <p className="mt-2">
                  {" "}
                  or back to <Link to="/">Home ?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
