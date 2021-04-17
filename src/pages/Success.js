import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../assets/images/LogoImage.png";
import SuccessIcon from "../assets/icons/success.svg";

export default function Success() {
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center"
      style={{ height: "100vh", paddingTop: 50, paddingBottom: 75 }}
    >
      <img src={LogoImage} alt="logo" />
      <img src={SuccessIcon} alt="logo" width={240} height={240} />
      <div>
        <h2 className="h2 text-primary text-center">Yay! Success</h2>
        <p className="mt-3 mb-0 text-center">
          We will send it. Wait for your shoes at home.
        </p>
        <p className="mt-0 text-center">I hope you like your choice.</p>
      </div>
      <Link className="btn btn-secondary text-white rounded-pill w-25" to="/">
        Back to home
      </Link>
    </div>
  );
}
