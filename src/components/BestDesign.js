import React, { useState, useEffect } from "react";
import "../assets/style/style.css";
import { useHistory } from "react-router-dom";
export default function BestDesign({arts}) {
  const history = useHistory()
  const [bestArts, setBestArts] = useState([])
  useEffect(() => {
    if(arts) {
      const dataArts = [...arts]
      dataArts.sort(function(a,b) {
        return b.likes - a.likes
      })
      setBestArts(dataArts)
    }
  }, [arts])
  function detailArt(id) {
    history.push('/product/' + id)
  }
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
                  onClick={() => detailArt(art._id)}
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
                      onClick={() => detailArt(art._id)}
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
