import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Shirt from "../../assets/Layout/alibaba/Image/cloth/Bitmap.png";
import Jacket from "../../assets/Layout/alibaba/Image/cloth/2 1.png";
import Coat from "../../assets/Layout/alibaba/Image/cloth/image 30.png";
import Wallet from "../../assets/Layout/alibaba/Image/cloth/image 24.png";
import Bag from "../../assets/Layout/alibaba/Image/cloth/image 26.png";
import Shorts from "../../assets/Layout/alibaba/Image/cloth/Bitmap (2).png";
import Headset from "../../assets/Layout/alibaba/Image/tech/image 86.png";
import Dish from "../../assets/Layout/alibaba/Image/interior/image 90.png";
import Kettle from "../../assets/Layout/alibaba/Image/tech/image 85.png";

export const Section6 = () => {
  const items = [
    {
      price: "$10.30",
      description: "T-Shirts with multiple colors, for men",
      img: Shirt,
    },
    {
      price: "$10.30",
      description: "Jeans shorts for men blue color",
      img: Jacket,
    },
    {
      price: "$12.50",
      description: "Brown winter coat medium size",
      img: Coat,
    },
    {
      price: "$34.00",
      description: "Jeans bag for travel for men",
      img: Wallet,
    },
    {
      price: "$99.00",
      description: "Leather wallet",
      img: Bag,
    },
    {
      price: "$9.99",
      description: "Canon camera black, 100x zoom",
      img: Shorts,
    },
    {
      price: "$8.99",
      description: "Headset for gaming with mic",
      img: Headset,
    },
    {
      price: "$10.30",
      description: "Smartwatch silver color modern",
      img: Bag,
    },
    {
      price: "$10.30",
      description: "Blue wallet for men leather material",
      img: Dish,
    },
    {
      price: "$80.95",
      description: "Jeans bag for travel for men",
      img: Kettle,
    },
  ];

  return (
    <div
      className="section-recommend"
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1180px",
          height: "696px",
        }}
      >
        <h2 style={{ padding: 0, margin: 12 }}>Recommended Items</h2>

        <Row gutter={[12, 12]} style={{ justifyContent: "space-between" }}>
          {items.map((item, i) => (
            <Col key={i}>
              <Card
                className="block-item-card"
                style={{
                  width: "220px",
                  height: 310,
                  border: "1px solid #E0E0E0",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: 200,
                    height: 200,
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      margin: 20,
                      // padding:10,
                      objectFit: "contain",
                    }}
                  />
                </div>

                <Typography.Title level={4} style={{ margin: 10 }}>
                  {item.price}
                </Typography.Title>

                <Typography
                  variant="body2"
                  style={{
                    color: "#6b7280",
                    margin: 10,
                    lineHeight: 1,
                  }}
                >
                  {item.description}
                </Typography>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
