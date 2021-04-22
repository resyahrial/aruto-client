import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../assets/style/style.css";

export default function BestDesign({ arts }) {
  const history = useHistory();
  const { data, isLoading } = arts;
  const [bestArts, setBestArts] = useState([]);

  useEffect(() => {
    if (data) {
      const dataArts = [...data];
      dataArts.sort(function (a, b) {
        return b.likes.length - a.likes.length;
      });
      setBestArts(dataArts);
    }
  }, [arts]);

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

  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">
        Make history with <br />
        your style
      </h3>
      <div className="row mt-5">
        {bestArts?.map((art, index) => {
          return index === 0 ? (
            <div key={art._id} className="col-6">
              <img
                onClick={() => detailArt(art._id)}
                src={art.image_url}
                className="w-100 h-80 best-img-fit"
                alt={`best ${index}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : (
            ""
          );
        })}
        <div className="col-6">
          <div className="d-flex align-content-between flex-wrap h-80">
            {bestArts?.map((art, index) => {
              return index > 0 && index < 5 ? (
                <div key={art._id} className="col-6">
                  <img
                    onClick={() => detailArt(art._id)}
                    src={art.image_url}
                    className="w-100 height-35 best-img-fit"
                    alt={`best ${index}`}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
