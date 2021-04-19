import React from "react";
import "../assets/style/style.css";


export default function Category({categories, setCategory}) {
  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">Categories</h3>
      <div className="row mt-5  justify-content-between">
        {
          categories.map(category => {
            return(
              <div 
                onClick={() => setCategory(category._id)}
                key={category._id} 
                className="col-3 justify-content-center d-flex px-0 position-relative">
              <img
                
                className="w-75"
                src={category.image_url}
                alt=""
              />
              <h5 className="text-white position-absolute font-weight-bold center-absolute my-0">
                {category.title}
              </h5>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}
