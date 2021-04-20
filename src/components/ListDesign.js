import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../assets/style/style.css";
export default function ListDesign({ arts, category }) {
  const history = useHistory();
  const { data, isLoading, error } = arts;
  const [dataArts, setDataArts] = useState([]);
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
    <div className=" mt-5">
      <div className="row px-5">
        {console.log(dataArts, "art")}
        {dataArts?.map((art) => {
          return (
            <div key={art._id} className="col-4 mb-4 team-area">
              <div className="single-team">
                ]
                <img src={art.image_url} className="w-100 item-cart-2" alt="" />
                <img
                  src="/images/heart.svg"
                  alt=""
                  className="bottom-left-icon"
                />
                <div
                  className="card-body body-style team-text"
                  onClick={() => detailArt(art._id)}
                >
                  <h5 className="mb-0">{art.title}</h5>
                  <p className="mb-0">{art.likes} Likes</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-3 mx-auto mt-5">
        <button type="submit" className="btn btn-theme-blue text-white mt-5">
          <p className="m-0">Lihat Semua</p>
        </button>{" "}
      </div>
    </div>
  );
}
