import React from "react";

import {
  Banner,
  BestArtist,
  Category,
  ListDesign,
  BestDesign,
} from "../components";
import "../assets/style/style.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <BestArtist />
        <Category />
        <ListDesign />
        <BestDesign />
      </div>
    </div>
  );
}
