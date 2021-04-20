import React from "react";
import "../assets/style/style.css";
import { useHistory } from "react-router-dom";


export default function Category({dataCategories, setCategory}) {
  const { categories, isLoading, error } = dataCategories
  const history = useHistory()
  if(isLoading) {
    return(
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  if(error) history.push('*')
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
