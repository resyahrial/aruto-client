import React from "react";

import "../assets/style/style.css";
import {
  Banner,
  BestArtist,
  Category,
  ListDesign,
  BestDesign,
} from "../components";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <BestArtist />
      <Category />
      <ListDesign />
      <BestDesign />
    </div>
  );
}
