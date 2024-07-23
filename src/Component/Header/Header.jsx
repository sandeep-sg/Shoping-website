import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import { Context } from "../../Context/Context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { toast } from "react-toastify";

const Header = () => {
  // context use........
  const { cartCount } = useContext(Context);
  const [navActive, setNavActive] = useState(false);
  {
    navActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  const { username, isUserSignin } = useContext(Context);

  const handleSignOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        toast.success("Signout sucessfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/"> Shopping</NavLink>
        </div>
        <div className="empty"></div>
        <nav>
          <ul>
            <NavLink to="/men">
              <li>Men</li>
            </NavLink>
            <NavLink to="/women">
              <li>Women</li>
            </NavLink>
            <NavLink to="/kids">
              <li>kids</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
        <div className="small-screen-navbar">
          <nav>
            <ul className={navActive ? "active" : ""}>
              <IoMdClose
                size={20}
                className="close-icon"
                onClick={() => {
                  setNavActive(false);
                }}
              />
              <NavLink
                to="/men"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <li>Men</li>
              </NavLink>
              <NavLink
                to="/women"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <li>Women</li>
              </NavLink>
              <NavLink
                to="/kids"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <li>kids</li>
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="profile-cart-container">
          <div className="user-profile">
            <CgProfile
              size={23}
              style={{ marginTop: "3px" }}
              className="profile-icon"
            />
            <div className="login-signup">
              <h3>Welcome {username}</h3>
              {isUserSignin ? (
                <NavLink to="/login">
                  <div id="signout" onClick={handleSignOut}>
                    Signout
                  </div>
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login">
                    <div id="login">Login</div>
                  </NavLink>
                  <NavLink to="/signup">
                    <div id="signup">Signup</div>
                  </NavLink>
                </>
              )}
            </div>
          </div>

          <div className="cart">
            <NavLink to="/carts">
              <FaCartShopping />
              <span style={{ marginLeft: "5px" }}>{cartCount}</span>
            </NavLink>
          </div>
        </div>
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={() => {
            setNavActive(true);
          }}
        />
      </header>
    </>
  );
};

export default Header;
