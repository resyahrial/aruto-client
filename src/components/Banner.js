import React from 'react'
import Slider from "react-slick";
import '../assets/style/style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Banner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    return (
        <div className="mt-content">
          <Slider {...settings}>
            <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/TieDyeForThis.jpg?v=1613629456"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/TieDyeForThis.jpg?v=1613629456"
              className="d-block w-100"
              alt="..."
            />
          </div>
            </Slider>
        </div>
    )
}