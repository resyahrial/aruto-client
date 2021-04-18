import React, { useState, useEffect } from "react";
import "../assets/style/style.css";
import { useSelector } from "react-redux";
export default function BestDesign() {
  const { arts, isLoading, error } = useSelector(state => state.arts)
  const [bestArts, setBestArts] = useState([])
  useEffect(() => {
    if(arts) {
      const dataArts = [...arts]
      console.log(dataArts)
      dataArts.sort(function(a,b) {
        return b.likes.length - a.likes.length
      })
      setBestArts(dataArts)
    }
  }, [arts])
  if(isLoading) <h1>Loading</h1>
  if(error) <h1>{error}</h1>
  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">
        Make history with <br />
        your style
      </h3>
      <div className="row mt-5">
        {
          bestArts?.map((art, index) => {
            return(
              index === 0 ?
                <div key={art._id} className="col-6">
                <img
                  src={art.image_url}
                  className="w-100 h-80"
                  alt=""
                />
              </div>: ''
            )            
          })
        }
        <div className="col-6">
          <div className="d-flex align-content-between flex-wrap h-80">
            {
              bestArts?.map((art, index) => {
                return (
                  index > 0 && index < 5 ?
                  <div key={art._id} className="col-6">
                    <img
                      src={art.image_url}
                      className="w-100 height-35"
                      alt=""
                    />
                  </div>:''
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
