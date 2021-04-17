import React from "react";
import SideLeft from '../components/SideLeft'
import '../assets/style/style.css'
import UserIcon from "../assets/images/user.svg";
import PasswordIcon from "../assets/images/icon-pass.svg";
import EnvelopeIcon from '../assets/images/envelope.svg'
export default function Register() {
  return (
    <div className="container-fluid mx-0 px-0">
    <div className="row">
    <SideLeft />
    <div class="col-6">
          <div class="mx-5 mt-2 mb-5">
            <div class="mt-0 mb-3 pb-0 pt-5">
              <h1 class="font-weight-bold text-left">
                Sign Up
              </h1>
            </div>
            <div class="mt-5  col-12 col-md-12">
                <form class="mt-0 w-100">
                  <div class="input-div">
                    <div class="d-flex justify-content-center align-items-center">
                    <img className="w-75 " src={UserIcon} alt="user"/>
                    </div>
                    <div>
                      <input
                        placeholder="Fullname"
                        type="text"
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="input-div">
                    <div class="d-flex justify-content-center align-items-center">
                      <img className="w-75 " src={EnvelopeIcon} alt="envelope"/>
                    </div>
                    <div>
                      <input
                        placeholder="Email"
                        type="email"
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="input-div">
                    <div
                      class="d-flex justify-content-center height-icon align-items-center"
                    >
                        <img className="w-75 " src={PasswordIcon} alt="password"/>
                    </div>
                    <div>
                      <input
                        placeholder="Password"
                        type="password"
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="input-div">
                    <div
                      class="d-flex justify-content-center height-icon align-items-center"
                    >
                          <img className="w-75 " src={PasswordIcon} alt="password"/>
                    </div>
                    <div>
                      <input
                        placeholder="Retype Password"
                        type="password"
                        class="input"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-theme-blue text-white mt-5"
                  >
                    Register
                  </button>
                  <p class="mt-5">
                    Already have an account?
                    <a href=""> Sign in</a>
                  </p>
                </form>
              </div>
          </div>
        </div>
    </div>
  </div>
  );
}
