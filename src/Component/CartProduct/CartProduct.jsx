import React, { useContext, useParams } from "react";
import "./CartProduct.css";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../Context/Context";
const CartProduct = ({ cartItems }) => {
  // console.log(cartItems)
  const { cartDeleteItemId, setCartDeleteitemId, cartCount, setCartCount } =
    useContext(Context);
  // console.log(setCartDeleteitemId)
  const deleteItemId = (id) => {
    setCartDeleteitemId([...cartDeleteItemId, id]);
    // increase the cart quantity when user delete the item...
    setCartCount(cartCount => cartCount-1);
  };
  return (
    <div className="cart-container">
      <div className="cart-left">
        <div className="item-image">
          <img src={cartItems.image} alt="" />
        </div>
      </div>
      <div className="cart-right">
        <div className="item-title">
          <h5>{cartItems.title}</h5>
          <p>{cartItems.description}</p>
        </div>
        <div className="size-quantity-row">
          <span className="item-size">
            <label htmlFor="size">Size :</label>
            <select name="" id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
            </select>
          </span>
          <span className="item-quantity">
            {" "}
            <label htmlFor="qty">Qty :</label>
            <select name="" id="qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>
        </div>
        <div className="item-price">
          <h5>₹ {cartItems.price} </h5>
        </div>
      </div>
      <div className="delete-btn">
        <IoMdClose size={25} onClick={() => deleteItemId(cartItems.id)} />
      </div>
    </div>
  );
};

export default CartProduct;
