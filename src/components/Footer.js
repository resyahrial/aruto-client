import React from "react";

import { Link, useLocation } from "react-router-dom";

import LogoImage from "../assets/images/LogoImage.png";
import FooterBg from "../assets/images/FooterBg.jpg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

const showFooterPath = ["/", "/product", "/shopping"];

export default function Footer() {
  const location = useLocation();

  if (!showFooterPath.includes(location.pathname)) {
    return false;
  }

  return (
    <footer
      style={{
        backgroundImage: `url(${FooterBg})`,
        height: 400,
        paddingTop: 150,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={LogoImage} alt="logo" className="mt-2" />
            <div className="mt-2">
              <Link to="/">
                <img src={FacebookIcon} alt="facebook" className="mr-2" />
              </Link>
              <Link to="/">
                <img src={TwitterIcon} alt="twitter" className="mr-2" />
              </Link>
              <Link to="/">
                <img src={InstagramIcon} alt="instagram" />
              </Link>
            </div>
          </div>
          <div className="col-5 offset-1">
            <h6 className="h5 text-white mt-3">Contact Us</h6>
            <p className="text-white mb-0 mt-3" style={{ fontSize: "0.9rem" }}>
              Address : Jalan Abc, Bandung No.45
            </p>
            <p className="text-white my-1" style={{ fontSize: "0.9rem" }}>
              Phone : 081345874945{" "}
            </p>
            <p className="text-white my-1" style={{ fontSize: "0.9rem" }}>
              Email : hello@gmail.com
            </p>
          </div>
          <div className="col-3">
            <h6 className="h5 text-white mt-3">Subscribe</h6>
            <p
              className="text-white mb-0 mt-3 pr-4"
              style={{ fontSize: "0.9rem" }}
            >
              Enter your email to get notified from us
            </p>
            <div
              className="input-group input-group-sm mt-2"
              style={{ paddingRight: "2rem" }}
            >
              <input type="text" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
