import React from "react";
import { Card, Col, Row } from "antd";
import "./product-detail.css";
import img1 from "../../assets/Layout/alibaba/Image/cloth/image 24.png";
import img2 from "../../assets/Image/tech/1.png";
import img3 from "../../assets/Layout/alibaba/Image/tech/image 86.png";
import img4 from "../../assets/Layout/alibaba/Image/cloth/Bitmap (2).png";
import img5 from "../../assets/Layout/alibaba/Image/tech/image 85.png";
import img6 from "../../assets/Image/interior/7.png";

const items = [
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img1,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img2,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img3,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img4,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img5,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img6,
  },
];

const RelatedProducts = () => {
  return (
    // <div className="related-grid">
    <Card
      title="Related Products"
      className="related-card"
    >
        <Row gutter={16}>
      {items.map((item, i) => (
          <Col span={4}>
            <div className="related-img-wrap">
              <img src={item.img} alt="" />
            </div>
            <div className="related-title">{item.title}</div>
            <div className="related-price">{item.price}</div>
          </Col>
      ))}
        </Row>
    </Card>
    // </div>
  );
};

export default RelatedProducts;
