import React, { useEffect, useState } from "react";
import { ProductsData } from "../../assets/ProductsData";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../Component/Product-display/ProductDisplay";

const Product = () => {
  const { id } = useParams();
  const product = ProductsData.find((item) => item.id == id);
  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
