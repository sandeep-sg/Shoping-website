import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import CartProduct from "../../Component/CartProduct/CartProduct";
import { ProductsData } from "../../assets/ProductsData";
import "./AddCarts.css";
const AddCarts = () => {
  const { cartsId, cartDeleteItemId, cartCount } = useContext(Context);

  // show cart item.....
  const cartProduct = ProductsData.filter((product) =>
    cartsId.includes(product.id)
  );
  // filter product when user remove the the cart........
  const filterCartProduct = cartProduct.filter(
    (cart) => !cartDeleteItemId.includes(cart.id)
  );

  return (
    <>
      <div className="carts-page">
        {filterCartProduct.length === 0 ? (
          <h3>No Item add</h3>
        ) : (
          <h3>Items {cartCount}</h3>
        )}
        {filterCartProduct.length !== 0 &&
          filterCartProduct.map((cartItems) => (
            <CartProduct cartItems={cartItems} key={cartItems.id}></CartProduct>
          ))}
      </div>
    </>
  );
};

export default AddCarts;
