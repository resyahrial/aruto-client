import React from "react";
import Slider from "react-slick";
import "../assets/style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="mt-3">
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/TieDyeForThis.jpg?v=1613629456"
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/LOOKBOOK-SU-2_3b2cf567-93b4-4cd9-8b0d-9b3760f5201d.jpg?v=1618906795"
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg"
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
      </Slider>
    </div>
  );
}
