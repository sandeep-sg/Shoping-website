import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import Nopage from "./Component/Nopage/Nopage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Sign up/Signup.jsx";
import MenProduct from "./Pages/MenProduct/MenProduct.jsx";
import AddToCarts from "./Pages/add to cart/AddCarts.jsx";
import { ToastContainer } from "react-toastify";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Product from "./Pages/Product/Product.jsx";
import WomenProduct from "./Pages/WomenProduct/WomenProduct.jsx";
import KidsProduct from "./Pages/kidsProduct/KidsProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<MenProduct />} />
      <Route path="/women" element={<WomenProduct />} />
      <Route path="/kids" element={<KidsProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carts" element={<AddToCarts></AddToCarts>} />
      <Route path="product/:id" element={<Product />} />
      <Route path="*" element={<Nopage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />

    <RouterProvider router={router} />

    <ToastContainer />
  </React.StrictMode>
);
