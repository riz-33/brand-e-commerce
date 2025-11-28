import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import Watch from "../../assets/Image/tech/1.png";
import Camera from "../../assets/Image/tech/2.png";
import Headphone from "../../assets/Image/tech/3.png";
import Kettle from "../../assets/Image/tech/4.png";
import Gaming from "../../assets/Image/tech/5.png";
import Laptop from "../../assets/Image/tech/6.png";
import Phone from "../../assets/Image/tech/7.png";
import Mobile from "../../assets/Image/tech/8.png";
import bg from "../../assets/Image/backgrounds/image 98.png";

const { Title, Text } = Typography;

export const Section4 = () => {
  const items = [
    { title: "Smart Watches", price: "USD 19", img: Watch },
    { title: "Cameras", price: "USD 89", img: Camera },
    { title: "Headphones", price: "USD 10", img: Headphone },
    { title: "Electric Kettle", price: "USD 90", img: Kettle },
    { title: "Gaming Set", price: "USD 35", img: Gaming },
    { title: "Laptop & PC", price: "USD 340", img: Laptop },
    { title: "Smart Phones", price: "USD 19", img: Phone },
    { title: "Smart Phones", price: "USD 240", img: Mobile },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          // width: "1180px",
          // height: "257px",
          marginTop: "20px",
          borderRadius: "6px",
          padding: 0,
        }}
      >
        <Row style={{ height: "100%" }}>
          {/* LEFT BANNER */}
          <Col
            span={6}
            style={{
              backgroundImage: `url("${bg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>
              Electronics <br /> & gadgets
            </Title>

            <Button
              style={{
                width: "120px",
                marginTop: "20px",
                background: "white",
                borderRadius: "6px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
            >
              Source now
            </Button>
          </Col>

          {/* RIGHT GRID */}
          <Col span={18}>
            <Row style={{ height: "100%" }}>
              {items.map((item, index) => {
                const isRight = (index + 1) % 4 === 0;
                const isBottom = index >= 4;

                return (
                  <Col
                    key={index}
                    span={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px",
                      borderRight: isRight ? "none" : "1px solid #e5e7eb",
                      borderBottom: isBottom ? "none" : "1px solid #e5e7eb",
                    }}
                  >
                    <div>
                      <Text style={{ fontSize: "16px", fontWeight: 500 }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        From <br /> {item.price}
                      </Text>
                    </div>

                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "82px",
                        height: "82px",
                        objectFit: "contain",
                      }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
