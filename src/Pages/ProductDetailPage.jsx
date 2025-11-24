import React from "react";
import { Breadcrumb } from "antd";
import ProductDetail from "../Components/Product Detail Page/ProductDetail";

export const ProductDetailPage = () => {
  return (
    <div>
      <div style={{ padding: "16px 48px", width: "100%" }}>
        <Breadcrumb
          style={{ margin: "0px 0 16px 0" }}
          separator=">"
          items={[
            { title: "Home" },
            { title: "Clothings" },
            { title: "Men's Wear" },
            { title: "Summer clothing" },
          ]}
        />
        <ProductDetail />
      </div>
    </div>
  );
};
