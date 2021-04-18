import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/style.css";
import { SideLeft } from "../components";
import UserIcon from "../assets/images/user.svg";
import PasswordIcon from "../assets/images/icon-pass.svg";

export default function Login() {
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
              <form className="mt-0 w-100">
                <div className="input-div">
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="w-75 " src={UserIcon} alt="user" />
                  </div>
                  <div>
                    <input placeholder="Email" type="email" className="input" />
                  </div>
                </div>
                <div className="input-div">
                  <div className="d-flex justify-content-center height-icon align-items-center">
                    <img className="w-75 " src={PasswordIcon} alt="password" />
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      type="password"
                      className="input"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-theme-blue text-white mt-5"
                >
                  Login
                </button>
                <p className="mt-5">
                  Don't have an account?
                  <Link to="/register"> Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
