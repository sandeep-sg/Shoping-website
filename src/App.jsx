import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Context } from "./Context/Context";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { ProductsData } from "./assets/ProductsData";

const App = () => {
  // add quantity property in product......
  ProductsData.map((data) => (data.quantity = 1));
  // when user click the link page move to the top
  useEffect(() => {
    let links = document.querySelectorAll("a");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        window.scrollTo(0, 0);
      })
    );
  }, []);
  // state define ....
  const [username, setUsername] = useState("Guest");
  const [isUserSignin, setIsUserSignin] = useState(false);
  const [cartsId, setCartsId] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartDeleteItemId, setCartDeleteitemId] = useState([]);
  console.log(cartCount);
  // functions ..........
  const productCartsId = (id) => {
    setCartsId([...cartsId, id]);
  };
  // console.log(cartDeleteItemId);
  // value for context
  const value = {
    username,
    setUsername,
    isUserSignin,
    productCartsId,
    cartsId,
    cartCount,
    setCartCount,
    cartDeleteItemId,
    setCartDeleteitemId,
  };
  // check user signin or not
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
        setIsUserSignin(true);
        // ...
      } else {
        setUsername("Guest");
        setIsUserSignin(false);
        // User is signed out
        // ...
      }
    });
  }, [auth]);
  // set loader when page is loading.....
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Context.Provider value={value}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </Context.Provider>
      )}
    </>
  );
};

export default App;
