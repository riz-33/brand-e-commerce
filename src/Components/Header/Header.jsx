import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Layout/Brand/logo-colored.png";
import { FaUser, FaCommentDots, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          display: "flex",
          // justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          flex: "1",
          minWidth: "250px",
        }}
        >
        {/* LOGO */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "40px",
              objectFit: "contain",
            }}
            />
        </Link>

        {/* SEARCH BOX */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #0D6EFD",
            borderRadius: "6px",
            overflow: "hidden",
            height: "40px",
            flex: "1",
            minWidth: "260px",
            maxWidth: "800px",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              flex: 1,
              height: "40px",
              paddingLeft: "10px",
              outline: "none",
              border: "none",
            }}
            />

          <select
            style={{
              width: "120px",
              height: "40px",
              border: "none",
              backgroundColor: "#f9fafb",
              outline: "none",
              cursor: "pointer",
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
              width: "90px",
              height: "40px",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* RIGHT ICON LINKS */}
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          color: "#8B96A5",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          minWidth: "260px",
        }}
      >
        <div>
          <FaUser size={20} />
          <div style={{ fontSize: "13px" }}>Profile</div>
        </div>

        <div>
          <FaCommentDots size={20} />
          <div style={{ fontSize: "13px" }}>Message</div>
        </div>

        <div>
          <FaHeart size={20} />
          <div style={{ fontSize: "13px" }}>Wishlist</div>
        </div>

        <div>
          <Link to="/cart" style={{ color: "#8B96A5", textDecoration: "none" }}>
            <div>
              <FaShoppingCart size={20} />
              <div style={{ fontSize: "13px", color: "#8B96A5" }}>My Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
