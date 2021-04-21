import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import "../assets/style/style.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/actions/arts";

export default function ListDesign({ arts, category }) {
  const [dataArts, setDataArts] = useState([]);
  const [range, setRange] = useState({
    min: 0,
    max: 6,
  });
  const history = useHistory();
  const { data, isLoading, error, search } = arts;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      let tempArts = [...data];
      if (!category) {
        setDataArts(tempArts);
      } else {
        let ArtsData = [];

        for (let i = 0; i < tempArts.length; i++) {
          let flag = false;
          const art = tempArts[i];
          for (let j = 0; j < art.categories.length; j++) {
            const artCategory = art.categories[j];
            if (artCategory._id === category) {
              flag = true;
            }
          }
          if (flag) {
            ArtsData.push(art);
          }
        }
        setDataArts(ArtsData);
      }
    }
  }, [category, data]);

  function detailArt(id) {
    history.push("/product/" + id);
  }

  const addFav = (id) => {
    if (localStorage.access_token) {
      dispatch(addFavorite(id));
    } else {
      history.push("/Login");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) history.push("*");
  return (
    <div className="mt-5">
      <div className="row px-5">
        {dataArts
          ?.filter((art) => art.title.toLowerCase().includes(search))
          .slice(range.min, range.max)
          .map((art) => {
            return (
              <div
                key={art._id}
                className="col-4 mb-4 team-area"
                style={{ cursor: "pointer" }}
              >
                <div className="single-team">
                  <img
                    src={art.image_url}
                    className="w-100 item-cart-2"
                    alt=""
                  />
                  <img
                    onClick={() => addFav(art._id)}
                    src={
                      art.likes?.find((e) => e === localStorage._id)
                        ? "/images/heart-red.svg"
                        : "/images/heart.svg"
                    }
                    alt="arts"
                    className="bottom-left-icon"
                  />
                  <div
                    className="card-body body-style team-text"
                    onClick={() => detailArt(art._id)}
                  >
                    <h5 className="mb-0">{art.title}</h5>
                    <p className="mb-0">{art.likes.length} Likes</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {range.min !== 0 && (
            <li className="page-item">
              <Link
                className="page-link text-center text-primary"
                to="#"
                style={{ width: 100 }}
                onClick={() =>
                  setRange({ ...range, min: range.min - 6, max: range.max - 6 })
                }
              >
                Previous
              </Link>
            </li>
          )}
          {range.max < dataArts?.length && (
            <li className="page-item">
              <Link
                className="page-link text-center text-primary"
                to="#"
                style={{ width: 100 }}
                onClick={() =>
                  setRange({ ...range, min: range.min + 6, max: range.max + 6 })
                }
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
