import React from "react";
import sideleft1 from "../assets/banners/sideleft-1.png";

import "../assets/style/style.css";

export default function Navbar() {
  return (
    <div className="col-6 mx-0 px-0">
      <img className="img-cover mx-0 px-0 w-100" src={sideleft1} alt="Left" />
    </div>
  );
}
