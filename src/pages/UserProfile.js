import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/actions/users";
// import { useParams } from "react-router-dom";

import { MyArtCard } from "../components";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userDataById = useSelector((state) => state.users.userDataById);
  // const params = useParams();
  const id =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjNGZkZWU1NTkzYzUxN2U4OGVkMjYiLCJlbWFpbCI6Im5hdWZhbEBtYWlsLmNvbSIsImlhdCI6MTYxODgwMzY0MH0.H8G5v8so8-b79pBs-9rk7V7dWXSg5EZbmrvXAjlenCE"; // Ceritanya dari localstoraghe Nanti
  // console.log(params);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch]);

  // console.log(userDataById);

  return (
    <>
      <section id="user-profile">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-4 pr-3">
              <div className="col-lg-12 border user-info-height">
                <div className="row pt-3">
                  <div className="col-lg-6 justify-content-center d-flex">
                    <img
                      src={`https://ui-avatars.com/api/?name=${userDataById?.data?.full_name}`}
                      alt="user-pic"
                      className="user-pic"
                    />
                  </div>
                  <div className="col-lg-6 flex-column pt-4">
                    <div>
                      <h6 className="username d-flex align-items-center">
                        {userDataById?.data?.username}
                      </h6>
                    </div>
                    <div>
                      <p className="job-text d-flex align-items-center">
                        Artist
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">
                        {userDataById?.data?.full_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Email</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">
                        {userDataById?.data?.email}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Location</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="d-flex align-items-baseline">
                <button type="button" className="btn btn-warning btn-add">
                  Add Art
                </button>
              </div>
            </div>

            <div className="col-lg-8 border p-0">
              <div className="col-lg py-3 border-bottom mb-3">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="true">
                        My Works <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">
                        My Purchase
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">
                        My Favorite
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg">
                <div className="row">
                  {/* {JSON.stringify(userDataById?.data?.arts)} */}
                  {userDataById?.data?.arts?.map((art) => {
                    return <MyArtCard key={art._id} art={art} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
