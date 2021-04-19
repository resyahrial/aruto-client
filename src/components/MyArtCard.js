import React from "react";

export default function MyArtCart({ art }) {
  console.log(art);
  return (
    <>
      <div className="col-lg-3">
        <img
          src={art.image_url}
          alt="art"
          className="img-thumbnail w-100 mb-2"
          style={{ objectFit: "cover", height: 150 }}
        />
      </div>
    </>
  );
}
