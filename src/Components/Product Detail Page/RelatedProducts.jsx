import React from "react";
import { Card } from "antd";
import "./product-detail.css";

const products = new Array(6).fill(0).map((_, i) => ({
  id: i,
  title: "Xiaomi Redmi 8 Original",
  price: "$32.00-$40.00",
  img: "/mnt/data/web-detail.jpg",
}));

const RelatedProducts = () => {
  return (
    <div className="related-grid">
      {products.map((p) => (
        <Card key={p.id} hoverable className="related-card">
          <div className="related-img-wrap">
            <img src={p.img} alt={p.title} />
          </div>
          <div className="related-title">{p.title}</div>
          <div className="related-price">{p.price}</div>
        </Card>
      ))}
    </div>
  );
};

export default RelatedProducts;
