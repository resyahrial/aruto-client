import React from "react";
import { deleteArt } from "../redux/actions/arts";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function MyArtCart({ art }) {
  const dispatch = useDispatch();

  const toDeleteArt = (_id) => {
    MySwal.fire({
      title: "Are you sure want to delete this beautiful art?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteArt(_id));
      }
    });
  };

  return (
    <>
      <div className="col-lg-3 container-image">
        <div className="col d-flex flex-row-reverse position-btn-del-art">
          <svg
            onClick={() => toDeleteArt(art._id)}
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
