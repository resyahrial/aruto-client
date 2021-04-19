import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../assets/style/style.css";
import { SideLeft } from "../components";
import { useHistory } from "react-router-dom";
import { login, register } from "../redux/actions/users";
export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error } = useSelector((state) => state.users);
  const onRegister = (e) => {
    e.preventDefault();
    if (username !== "" && email !== "" && fullname !== "" && password !== "") {
      dispatch(
        register({
          fullname: fullname,
          username: username,
          email: email,
          password: password,
        })
      );
      history.push("/Login");
    }
  };
  return (
    <div className="container-fluid mx-0 px-0">
      <div className="row">
        <SideLeft />
        <div className="col-6">
          <div className="mx-5 mt-2 mb-5">
            <div className="mt-0 mb-3 pb-0 pt-5">
              <h1 className="font-weight-bold text-left">Sign Up</h1>
            </div>
            <div className="mt-5  col-12 col-md-12">
              <form className="mt-0 w-100" onSubmit={(e) => onRegister(e)}>
                <div className="input-div">
                  <div className="d-flex justify-content-center height-icon align-items-center">
                    <img className="w-75 " src="/images/user.svg" alt="user" />
                  </div>
                  <div>
                    <input
                      placeholder="Fullname"
                      type="text"
                      className="input"
                      required
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-div">
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="w-75 " src="/images/user.svg" alt="user" />
                  </div>
                  <div>
                    <input
                      placeholder="Username"
                      type="text"
                      className="input"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-div">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="w-75 "
                      src="/images/envelope.svg"
                      alt="envelope"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      className="input"
                      required
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-theme-blue text-white mt-5"
                >
                  Register
                </button>
                <p className="mt-5">
                  Already have an account?
                  <Link to="/login"> Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
