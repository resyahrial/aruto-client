import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addFavorite, fetchArt } from "../redux/actions/arts";

export default function MyFavArtCard({ art }) {
  // console.log(art);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArt());
  }, [dispatch]);

  const addFav = (id) => {
    if (localStorage.access_token) dispatch(addFavorite(id));
  };

  return (
    <>
      <div className="col-lg-3 container-image">
        <div className="col d-flex flex-row-reverse position-btn-del-art">
          <svg
            onClick={() => addFav(art._id)}
            xmlns="http://www.w3.org/2000/svg"
            className="btn-del-art pr-1"
            fill="none"
            color="rgb(155, 65, 37)"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
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
