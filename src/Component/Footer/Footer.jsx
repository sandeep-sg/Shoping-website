import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Socail media account</p>
      <div className="socal-icons">
        <div className="facebook-icon">
          <Link>
            {" "}
            <FaFacebook />
          </Link>
        </div>
        <div className="instagram-icon">
          <Link>
            {" "}
            <FaInstagram />
          </Link>
        </div>
        <div className="youtube-icon">
          <Link to="https://www.youtube.com">
            <FaYoutube />
          </Link>{" "}
        </div>
        <div className="twitter-icon">
          <Link>
            {" "}
            <FaTwitter />
          </Link>{" "}
        </div>
      </div>
      <div className="copy-right">
        <p>© 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
