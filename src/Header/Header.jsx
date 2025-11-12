import React from "react";
import "./Header.css";
import Logo from "../logo.png";
import {
  FaShoppingBag,
  FaUser,
  FaCommentDots,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            onClick={() => {
              window.location.href = "/";
            }}
            src={Logo}
            alt="logo"
            style={{
              cursor: "pointer",
              // maxWidth: "120px",
              // maxHeight: showLogo2 ? 0 : "120px",
              // overflow: "hidden",
              // opacity: showLogo2 ? 0 : 1,
              // transition: "all 0.5s ease",
            }}
          />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <select>
            <option>All category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>
          <button>Search</button>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#">
          <FaUser /> Profile
        </a>
        <a href="#">
          <FaCommentDots /> Message
        </a>
        <a href="#">
          <FaHeart /> Orders
        </a>
        <a href="#">
          <FaShoppingCart /> My cart
        </a>
      </div>
    </header>
  );
};

export default Header;
