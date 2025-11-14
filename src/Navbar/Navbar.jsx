import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import Flag from "../assets/Layout1/Image/flags/DE@2x.png";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        // padding: "12px 40px",
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "16px",
        // color: "#374151",
        height: "56px",
        top: "86px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
        <div
          className="nav-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
            transition: "color 0.2s ease-in-out",
          }}
        >
          <FaBars style={{ fontSize: "18px" }} />
          All category
        </div>
        <div className="nav-item">Hot offers</div>
        <div className="nav-item">Gift boxes</div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Menu item</div>

        <div>
          Help <FaChevronDown />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
        <div>
          English, USD <FaChevronDown />
        </div>

        <div>
          Ship to
          <img src={Flag} alt="flag"  />
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
