import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom'
const showNavbarPath = ["/", "/profile", "/cart"];

export default function Navbar() {
  const history=useHistory()
  const location = useLocation();
  const Logout=(e)=>{
    // e.preventDefault();
    localStorage.removeItem('access_token')
    history.push('/')
  }
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
      { !localStorage.access_token ?         <ul
          className="navbar-nav align-items-center justify-content-between"
          style={{ width: "30%" }}
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
        </ul> :         <ul
          className="navbar-nav align-items-center ml-auto"
          style={{ width: "30%" }}
        >
          <li className="nav-item">
            <Link className="nav-link pr-5" to="/cart">
              <img
                src="/icons/cart.svg"
                alt="cart_icon"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-primary btn-sm text-white"
              style={{ width: 100 }}
              onClick={()=>Logout()}
            >
             Logout
            </Link>
          </li>
        </ul>}
      </div>
    </nav>
  );
}
