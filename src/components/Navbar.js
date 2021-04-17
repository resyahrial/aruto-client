import React from "react";
import { Link, useLocation } from "react-router-dom";

import LogoImage from "../assets/images/LogoImage.png";
import CartIcon from "../assets/icons/cart.svg";
import SearchIcon from "../assets/icons/search.svg";

const hideNavbarPath = ["/login", "/register", "/success", "/error"];

export default function Navbar() {
  const location = useLocation();

  if (hideNavbarPath.includes(location.pathname)) {
    return false;
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ maxHeight: 70 }}
    >
      <div className="container justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={LogoImage} alt="logo" />
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
            <img src={SearchIcon} alt="search_icon" width={16} height={16} />
          </div>
        </form>
        <ul
          className="navbar-nav align-items-center justify-content-between"
          style={{ width: "30%" }}
        >
          <li className="nav-item">
            <Link className="nav-link btn btn-sm" to="/">
              <img src={CartIcon} alt="cart_icon" width={32} height={32} />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-outline-primary text-primary btn-sm"
              to="/"
              style={{ width: 100 }}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-primary btn-sm text-white"
              to="/"
              style={{ width: 100 }}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
