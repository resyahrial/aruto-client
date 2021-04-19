import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../assets/style/style.css";
export default function ListDesign({ arts, category }) {
  const history = useHistory()
  const [dataArts, setDataArts] = useState([])
  useEffect(() => {
    if(arts){
      let tempArts = [...arts]
      if(!category) {
        setDataArts(tempArts)
      }else {
        let ArtsData = []
        for (let i = 0; i < tempArts.length; i++) {
          let flag = false
          const art = tempArts[i]
          for (let j = 0; j < art.categories.length; j++) {
            const artCategory = art.categories[j];
            if(artCategory._id === category){
              flag = true
            }
          }
          if(flag){
            ArtsData.push(art)
          }
        }
        setDataArts(ArtsData)
      }
    }    
  }, [category, arts])
  function detailArt(id) {
    history.push('/product/' + id)
  }
  return (
    <div className=" mt-5">
      <div className="row px-5">
        {
          dataArts?.map(art => {
            return(
              <div key={art._id} className="col-3 mb-4">
              <img
                onClick={() => detailArt(art._id)}
                src={art.image_url}
                className="w-100 item-cart-2"
                alt=""
              />
              </div>
            )
          })
        }        
      </div>
    </div>
  );
}
