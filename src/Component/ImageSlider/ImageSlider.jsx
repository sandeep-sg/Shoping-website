import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"
const ImageSlider = ({ images }) => {
  //   console.log(images);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, i) => {
            return <img src={image} alt="" key={i} width="100%" />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
