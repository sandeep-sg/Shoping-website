import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
const Items = ({ image, title, price, id }) => {
//  console.log(id)
  return (
    <div className="item-container">
      <div className="item-img">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="item-title">
        <p>{title}</p>
      </div>
      <div className="item-price">
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default Items;
