import React from "react";
import "./Header.css";
import Logo from "../../assets/Layout/Brand/logo-colored.png";
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
        height: "60px",
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
            borderRadius: "6px",
            border: "1px solid #0D6EFD",
            width: "665px",
            height: "40px",
          }}
        >
          <input
            type="text"
            placeholder=" Search"
            style={{
              width: "421px",
              height: "34px",
              outline: "none",
            }}
          />
          <select
            style={{
              width: "145px",
              height: "40px",

              // padding: "8px",
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
              border: "none",
              cursor: "pointer",
              width: "100px",
              height: "40px",
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
          color: "#8B96A5",
          // fontSize: "18px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <div className="links-I">
          <i>
            <a href="#">
              <FaUser style={{ color: "#8b96a5" }} />
            </a>
          </i>
          <div>Profile</div>
        </div>
        <div>
          <i>
            <a href="#">
              <FaCommentDots style={{ color: "#8b96a5" }} />
            </a>
          </i>
          <div>Message</div>
        </div>
        <div>
          <i>
            <a href="#">
              <FaHeart style={{ color: "#8b96a5" }} />
            </a>
          </i>
          <div>Orders</div>
        </div>
        <div>
          <i>
            <a href="/cart">
              <FaShoppingCart style={{ color: "#8b96a5" }} />
            </a>
          </i>
          <div>My Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
