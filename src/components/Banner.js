import React from "react";
import Slider from "react-slick";
import "../assets/style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banners/1.png";
import banner2 from "../assets/banners/2.png";
import banner3 from "../assets/banners/3.png";
import banner4 from "../assets/banners/4.png";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img
            src={banner1}
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src={banner2}
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src={banner3}
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src={banner4}
            className="d-block w-100 height-banner"
            alt="..."
          />
        </div>
      </Slider>
    </div>
  );
}
