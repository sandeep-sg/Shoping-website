import React, { createContext, useEffect, useState } from "react";
import Items from "../../Component/Items/Items";
import "./MenProduct.css";
import { ProductsData } from "../../assets/ProductsData";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import HomeSliderImage from "../../assets/HomeSliderImage/HomeSliderImage";

const MenProduct = () => {
  const [category, setCategory] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);
  const handleProductCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (category != "") {
      let filterData = ProductsData.filter(
        (product) => product.category == category
      );
      setFilterProduct(filterData);
    } else {
      setFilterProduct(ProductsData);
    }
  }, [category]);

  return (
    <>
      <div className="men-section">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <h1>All Men Product</h1>
        <div className="men-cart-container">
          <div className="filter-section">
            <h3>Fliter</h3>
            <div className="filter-category">
              <label htmlFor="category">category:</label>
              <br />
              <select name="" id="category" onChange={handleProductCategory}>
                <option value="">Select category</option>
                <option value="t-shirt">T-shirt</option>
                <option value="shirt">Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="pant">Pant</option>
                <option value="blazer">Blazer</option>
                <option value="shoes">Shoes</option>
              </select>
            </div>
            <hr />
            <div className="filter-price">
              <label htmlFor="price">Price:</label>
              <br />
              <select name="" id="price">
                <option value="">Select Price</option>
                <option value="">300-400</option>
                <option value="">400-500</option>
                <option value="">500-600</option>
                <option value="">600-700</option>
                <option value="">700-800</option>
                <option value="">800-1000</option>
              </select>
            </div>
          </div>

          <div className="carts-container">
            {filterProduct.map((product) => (
              <Items
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenProduct;
