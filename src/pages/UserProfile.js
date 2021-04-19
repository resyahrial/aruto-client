import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../redux/actions/users";
import { MyArtCard, AddArt } from "../components";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userDataById = useSelector((state) => state.users.userDataById);

  useEffect(() => {
    dispatch(fetchUserById(localStorage.access_token));
  }, [dispatch]);

  return (
    <>
      <section id="user-profile">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-3 pr-3">
              <div className="border rounded-lg">
                {/* profile */}
                <div className="d-flex align-items-center py-3 px-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${userDataById?.data?.full_name}`}
                    alt="user-pic"
                    className="user-pic"
                    style={{ width: 48, height: 48 }}
                  />
                  <div className="d-flex flex-column ml-3">
                    <h6 className="username d-flex align-items-center">
                      {userDataById?.data?.full_name}
                    </h6>
                    <p className="job-text d-flex align-items-center">Artist</p>
                  </div>
                </div>
                <div className="w-full border shadow"></div>

                {/* add arts */}
                <AddArt />
              </div>
            </div>

            <div className="col-lg-9 border p-0">
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
                  {userDataById?.data?.arts.length === 0 ? (
                    <>
                      <div className="col-lg text-center pt-5">
                        <h3>There's No Art to Show</h3>
                      </div>
                    </>
                  ) : (
                    userDataById?.data?.arts?.map((art) => {
                      return <MyArtCard key={art._id} art={art} />;
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
