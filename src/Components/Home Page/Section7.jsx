import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Service1 from "../../assets/Image/backgrounds/S1.png";
import Service2 from "../../assets/Image/backgrounds/S2.png";
import Service3 from "../../assets/Image/backgrounds/S3.png";
import Service4 from "../../assets/Image/backgrounds/S4.png";
import icon1 from "../../assets/Layout1/Image/icons/1.png";
import icon2 from "../../assets/Layout1/Image/icons/2.png";
import icon3 from "../../assets/Layout1/Image/icons/3.png";
import icon4 from "../../assets/Layout1/Image/icons/4.png";
// import Kettle from "../../assets/Layout/alibaba/Image/tech/image 85.png";

export const Section7 = () => {
  const items = [
    {
      title: "Source from Industry Hubs",
      icon: icon1,
      img: Service1,
    },
    {
      title: "Customize Your Products",
      icon: icon2,
      img: Service2,
    },
    {
      title: "Fast, Reliable Shipping by Ocean or Air",
      icon: icon3,
      img: Service3,
    },
    {
      title: "Product Monitoring and Inspection",
      icon: icon4,
      img: Service4,
    },
  ];

  return (
    <div
      className="section-service"
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1180px",
          height: "256px",
        }}
      >
        <h2 style={{ padding: 0, margin: 12 }}>Our Extra Services</h2>

        <Row gutter={[12, 12]} style={{ justifyContent: "space-between" }}>
          {items.map((item, i) => (
            <Col key={i}>
              <Card
                style={{
                  width: 280,
                  height: 200,
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1px solid #E0E0E0",
                }}
              >
                <div
                  style={{
                    width: 280,
                    height: 120,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "relative",
                    opacity: 0.9,
                  }}
                >
                  <div
                    style={{
                      width: 55,
                      height: 55,
                      backgroundColor: "#D1E7FF",
                      border: "2px solid white",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: -20,
                      right: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{ width: 18, height: 18 }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    height: 44,
                    padding: "15px 90px 0px 16px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: "22px",
                      letterSpacing: 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>

              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
