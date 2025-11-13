import React from "react";
import "./Header.css";
import Logo from "../logo.png";
import { FaUser, FaCommentDots, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottom: "1px solid #e5e7eb",
        height:"80px",
        // width:"1440px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            marginLeft: "50px",
            borderRadius: "0.375rem",
            border: "2px solid #2563eb",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px",
              width: "288px",
              // color: "#4b5563",
              // backgroundColor: "#f9fafb",
              outline: "none",
            }}
          />
          <select
            style={{
              padding: "8px",
              backgroundColor: "#f9fafb",
              // color: "#4b5563",
              outline: "none",
            }}
          >
            <option>All category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              padding: "9px 20px",
              border: "none",
              // borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="links"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          color: "#4b5563",
          // fontSize: "18px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <div>
          <i>
            <a href="#">
              <FaUser />
            </a>
          </i>
          <div>Profile</div>
        </div>
        <div>
          <i>
            <a href="#">
              <FaCommentDots />
            </a>
          </i>
          <div>Message</div>
        </div>
        <div>
          <i>
            <a href="#">
              <FaHeart />
            </a>
          </i>
          <div>Orders</div>
        </div>
        <div>
          <i>
            <a href="/cart">
              <FaShoppingCart />
            </a>
          </i>
          <div>My Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
