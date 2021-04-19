import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../redux/actions/users";

const showNavbarPath = ["/", "/profile", "/cart"];

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const userDataById = useSelector((state) => state.users.userDataById);

  useEffect(() => {
    if (localStorage?.access_token) {
      dispatch(fetchUserById(localStorage.access_token));
    }
  }, [dispatch]);

  const Logout = (e) => {
    localStorage.removeItem("access_token");
    history.push("/");
  };

  if (
    !showNavbarPath.includes(location.pathname) &&
    !location.pathname.includes("/product")
  ) {
    return false;
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ maxHeight: 70 }}
    >
      <div className="container justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src="/images/LogoImage.png" alt="logo" />
        </Link>
        <form className="d-flex position-relative" style={{ width: "40%" }}>
          <input
            className="form-control pl-4 text-sm"
            type="search"
            placeholder="Apa yang ingin anda cari ?"
            style={{ fontSize: "0.8rem", height: 44 }}
          />
          <div
            className="position-absolute d-flex align-items-center pr-4"
            style={{ right: 0, top: 0, bottom: 0 }}
          >
            <img
              src="/images/search.svg"
              alt="search_icon"
              width={16}
              height={16}
            />
          </div>
        </form>
        <ul
          className="navbar-nav align-items-center justify-content-between"
          style={{ width: `${localStorage.access_token ? "20%" : "30%"}` }}
        >
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <img
                src="/icons/cart.svg"
                alt="cart_icon"
                width={32}
                height={32}
              />
            </Link>
          </li>
          {!localStorage.access_token && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-outline-primary text-primary btn-sm"
                  to="/register"
                  style={{ width: 100 }}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary btn-sm text-white"
                  to="/login"
                  style={{ width: 100 }}
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
          {localStorage.access_token && (
            <>
              <li className="nav-item mr-2">
                <Link to="/profile">
                  <img
                    src={`https://ui-avatars.com/api/?name=${userDataById?.data?.full_name}`}
                    alt="user-pic"
                    className="user-pic"
                    style={{ width: 40, height: 40 }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-primary btn-sm text-white"
                  style={{ width: 100 }}
                  onClick={() => Logout()}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
