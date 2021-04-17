import React from "react";
import { Link } from "react-router-dom";

import ErrorIcon from "../assets/icons/404.svg";

export default function Error() {
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center"
      style={{ height: "100vh", paddingTop: 75, paddingBottom: 125 }}
    >
      <img src={ErrorIcon} alt="logo" width={240} height={240} />
      <div>
        <h2 className="h2 text-center">Oops! something wrong</h2>
        <div className="w-75 mx-auto">
          <p className="mt-3 text-center">
            The page that you requsted doesn’t exist at this moment
          </p>
        </div>
      </div>
      <Link className="btn btn-secondary text-white rounded-pill w-25" to="/">
        Back to home
      </Link>
    </div>
  );
}
