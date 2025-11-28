import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import Chair from "../../assets/Image/interior/1.png";
import Lamp from "../../assets/Image/interior/2.png";
import Mattress from "../../assets/Image/interior/3.png";
import Dishes from "../../assets/Image/interior/4.png";
import Blender from "../../assets/Image/interior/5.png";
import Coffee from "../../assets/Image/interior/6.png";
import Appliance from "../../assets/Image/interior/7.png";
import Pots from "../../assets/Image/interior/8.png";
import bg from "../../assets/Image/backgrounds/Group 969.png";

const { Title, Text } = Typography;

export const Section3 = () => {
  const items = [
    { title: "Soft Chairs", price: "USD 19", img: Chair },
    { title: "Lamps", price: "USD 19", img: Lamp },
    { title: "Mattress", price: "USD 19", img: Mattress },
    { title: "Kitchen Dishes", price: "USD 19", img: Dishes },
    { title: "Blenders", price: "USD 100", img: Blender },
    { title: "Coffee Maker", price: "USD 39", img: Coffee },
    { title: "Home Appliance", price: "USD 19", img: Appliance },
    { title: "Flower Pots", price: "USD 10", img: Pots },
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
          {/* LEFT SECTION */}
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
              Home and <br /> outdoor
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
                    {/* TEXT */}
                    <div>
                      <Text style={{ fontSize: "16px", fontWeight: 500 }}>
                        {item.title}
                      </Text>

                      <br />

                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        From <br /> {item.price}
                      </Text>
                    </div>

                    {/* IMAGE */}
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
