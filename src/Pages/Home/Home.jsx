import React from "react";
import "./Home.css";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import HomeSliderImage from "../../assets/HomeSliderImage/HomeSliderImage";
const Home = () => {
  return (
    <>
      <ImageSlider images={HomeSliderImage}></ImageSlider>
      <div className="home-products-container">
        <h1>POPULAR SECTION</h1>
        <div className="home-popular-products"></div>
        <h1>SHOP BY CATEGORY</h1>
        <div className="shop-by-category"></div>
      </div>
    </>
  );
};

export default Home;
