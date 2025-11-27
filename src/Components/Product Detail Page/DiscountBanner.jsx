import React from "react";
import { Button } from "antd";
import "./product-detail.css";

export const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="banner-inner">
        <div>
          <h3>Super discount on more than 100 USD</h3>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <div>
          <Button type="primary" className="banner-cta">
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};
