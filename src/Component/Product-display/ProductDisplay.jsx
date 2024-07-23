import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../Context/Context";

const ProductDisplay = ({ product }) => {
  const size = ["S", "M", "L", "XL", "2XL"];
  const { productCartsId, cartCount, setCartCount } = useContext(Context);
  const [productSize, setProductSize] = useState("");
  const [isSizeSelect, setIsSizeSelect] = useState(true);
  const getProductId = (id) => {
    productCartsId(id);

    // notification....

    toast.success("Add sucessfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // increase cartCount when user add the cart item...
    setCartCount((cartCount) => cartCount + 1);
  };

  const selectProductSize = (e) => {
    setProductSize(e.target.innerText);
    setIsSizeSelect(true);
  };
  return (
    <>
      <div className="product-container">
        <h1>PRODUCT CARTS</h1>

        <div className="product-detials">
          <div className="product-details-left">
            <img src={product.image} alt="" />
          </div>
          <div className="product-details-right">
            <div className="product-title">{product.title}</div>
            <div className="product-description">{product.description}</div>
            <hr />
            <div className="product-price">Rs.{product.price}</div>
            <div className="product-rating">rating : {product.rating}</div>
            <hr />
            <div className="select-size">
              <h3>Select Size</h3>
              <div className="size-container">
                {size.map((item, i) => {
                  return (
                    <div
                      className={`size-box ${
                        productSize == item ? "active" : ""
                      } `}
                      key={i}
                      onClick={selectProductSize}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {!isSizeSelect && <h4>Please select size</h4>}
            <button id="addToCartBtn" onClick={() => getProductId(product.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
