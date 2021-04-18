import React, { useEffect } from "react";
import { fetchArt } from "../redux/actions/arts";
import { useDispatch, useSelector } from "react-redux";
import "../assets/style/style.css";
export default function ListDesign() {
  const dispatch = useDispatch()
  const { arts, isLoading, error} = useSelector(state => state.arts)
  useEffect(() => {
    dispatch(fetchArt())
  },[dispatch])
  if(isLoading) <h1>Loading</h1>
  if(error) <h1>{error}</h1>
  return (
    <div className=" mt-5">
      <div className="row px-5">
        {
          arts?.map(art => {
            return(
              <div key={art._id} className="col-3 mb-4">
              <img
                src={art.image_url}
                className="w-100"
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
