import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../redux/actions/users";
import { fetchTransactionHistory } from "../redux/actions/transactions";
import {
  MyArtCard,
  AddArt,
  MyTransactionCard,
  MyFavArtCard,
} from "../components";
import { useHistory } from "react-router-dom";
import { fetchArt } from "../redux/actions/arts";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { userDataById, isLoading } = useSelector((state) => state.users);
  const transactionHistory = useSelector(
    (state) => state.transactions.myHistory
  );
  const [myWorks, setMyWorks] = useState(true);
  const [myPurchases, setMyPurchase] = useState(false);
  const [myFavorites, setMyFavorites] = useState(false);
  const [myLike, setMyLike] = useState([]);
  const history = useHistory();

  const fav = useSelector((state) => state.arts.data);
  // console.log(fav);

  useEffect(() => {
    dispatch(fetchTransactionHistory());
    dispatch(fetchUserById(localStorage.access_token));
    dispatch(fetchArt());
  }, []);

  useEffect(() => {
    viewLike();
  }, [fav]);

  const viewMyWorks = (e) => {
    e.preventDefault();
    setMyWorks(true);
    setMyPurchase(false);
    setMyFavorites(false);
  };

  const viewMyPurchases = (e) => {
    e.preventDefault();
    setMyWorks(false);
    setMyPurchase(true);
    setMyFavorites(false);
  };

  const viewMyFavorites = (e) => {
    e.preventDefault();
    setMyWorks(false);
    setMyPurchase(false);
    setMyFavorites(true);
    viewLike();
  };

  if (!localStorage.access_token) {
    history.push("/login");
  }

  function viewLike() {
    let allLike = [];
    fav?.forEach((findItem) => {
      let isLike = findItem.likes.find((e) => e === localStorage._id);
      if (isLike) {
        allLike.push(findItem);
      }
    });
    setMyLike(allLike);
  }

  return (
    <>
      <section id="user-profile">
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-3 pr-3">
              <div className="border rounded-lg">
                <div className="d-flex align-items-center py-3 px-3">
                  <img
                    src={`https://i.pravatar.cc/150?u=${userDataById?.data?.full_name}`}
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
                    <li className={`nav-item ${myWorks ? "active" : ""}`}>
                      <a
                        onClick={(e) => viewMyWorks(e)}
                        className="nav-link"
                        href="true"
                      >
                        My Works
                      </a>
                    </li>
                    <li className={`nav-item ${myPurchases ? "active" : ""}`}>
                      <a
                        onClick={(e) => viewMyPurchases(e)}
                        className="nav-link"
                        href="true"
                      >
                        My Purchases
                      </a>
                    </li>
                    <li className={`nav-item ${myFavorites ? "active" : ""}`}>
                      <a
                        onClick={(e) => viewMyFavorites(e)}
                        className="nav-link"
                        href="true"
                      >
                        My Favorites
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg">
                <div className="row">
                  {myWorks ? (
                    userDataById?.data?.arts.length === 0 ? (
                      <>
                        <div className="col-lg text-center pt-5">
                        <img src="/images/empty.svg" className="w-25"/>
                          <h4 className="mt-5">There's No Art to Show</h4>
                        </div>
                      </>
                    ) : (
                      userDataById?.data?.arts?.map((art) => {
                        return <MyArtCard key={art._id} art={art} />;
                      })
                    )
                  ) : (
                    ""
                  )}

                  {myPurchases ? (
                    transactionHistory.length === 0 ? (
                      <>
                        <div className="col-lg text-center pt-5">
                        <img src="/images/empty.svg" className="w-25"/>
                          <h4 className="mt-5">There's No Purchase History to Show</h4>
                        </div>
                      </>
                    ) : (
                      <div className="col-lg-12">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">#Transaction-ID</th>
                              <th scope="col">Item</th>
                              <th scope="col">Shipment Address</th>
                              <th scope="col">Transaction Amount</th>
                              <th scope="col">Payment Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transactionHistory?.map((history) => {
                              return (
                                <MyTransactionCard
                                  key={history._id}
                                  history={history}
                                />
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )
                  ) : (
                    ""
                  )}
                  {myFavorites ? (
                    myLike?.length === 0 ? (
                      <>
                        <div className="col-lg text-center pt-5">
                        <img src="/images/empty.svg" className="w-25"/>
                          <h4 className="mt-5">There's No Favorite to show</h4>
                        </div>
                      </>
                    ) : (
                      myLike?.map((art) => {
                        return <MyFavArtCard key={art._id} art={art} />;
                      })
                    )
                  ) : (
                    ""
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
