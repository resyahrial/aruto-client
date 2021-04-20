import React from "react";
import Slider from "react-slick";

import "../assets/style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Category({dataCategories, setCategory}) {
  const { categories, isLoading, error } = dataCategories
  
  if(isLoading) {
    return(
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  
  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">Categories</h3>
      <Slider {...settings} className="mt-5 mx-0  justify-content-between">
        {
          categories.map(category => {
            return(
              <div 
                onClick={() => setCategory(category._id)}
                key={category._id} 
                className="px-5 justify-content-center d-flex px-0 position-relative">
              <img
                
                className="w-100"
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
    </Slider>
    </div>
  );
}
