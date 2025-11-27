import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import Flag from "../../assets/Layout1/Image/flags/DE@2x.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LEFT SECTION */}
      <div className="navbar-left">
        <div className="nav-item with-icon">
          <FaBars />
          <span>All category</span>
        </div>

        <div className="nav-item">Hot offers</div>
        <div className="nav-item">Gift boxes</div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Menu item</div>

        <div className="nav-item help-dropdown">
          Help <FaChevronDown size={12} />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-right">
        <div className="nav-item dropdown">
          English, USD <FaChevronDown size={12} />
        </div>

        <div className="nav-item dropdown flag-box">
          Ship to
          <img src={Flag} alt="flag" className="flag-img" />
          <FaChevronDown size={12} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
