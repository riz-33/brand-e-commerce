import React from "react";
import { Badge, Card, Col, Row, Statistic } from "antd";
import Watch from "../../assets/Image/tech/1.png";
import Laptop from "../../assets/Image/tech/6.png";
import Camera from "../../assets/Image/tech/2.png";
import Headphone from "../../assets/Image/tech/5.png";
import Mobile from "../../assets/Image/tech/image 23.png";

const { Meta } = Card;

export const Section2 = () => {
  return (
    <div>
      <Card
        style={{
          // width: 1180,
          // height: 240,
          marginTop: "20px",
          border: "1px solid #DEE2E7",
          // padding: "10px",
        }}
      >
        <Row gutter={[16, 16]}>
          {/* LEFT SIDE */}
          <Col
            xs={24}
            sm={8}
            md={6}
            lg={6}
            style={{ paddingTop: 10, paddingLeft: 30 }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 0 }}>
              Deals and offers
            </h4>

            <p style={{ fontSize: 16, color: "#8B96A5", marginTop: 4 }}>
              Hygiene equipments
            </p>

            {/* Countdown Boxes */}
            <Row gutter={8}>
              {[
                { value: "04", label: "Days" },
                { value: "13", label: "Hour" },
                { value: "34", label: "Min" },
                { value: "56", label: "Sec" },
              ].map((item, i) => (
                <Col key={i}>
                  <Card
                    style={{
                      width: 60,
                      height: 70,
                      backgroundColor: "#505050",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 6,
                    }}
                  >
                    <Statistic
                      value={item.value}
                      title={item.label}
                      valueStyle={{ color: "white", fontSize: 18 }}
                      titleStyle={{ color: "white", fontSize: 12 }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT SIDE PRODUCTS */}
          <Col xs={24} sm={16} md={18} lg={18}>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              {[
                { img: Watch, title: "Smart Watches", off: "-25%" },
                { img: Laptop, title: "Laptops", off: "-15%" },
                { img: Camera, title: "GoPro Cameras", off: "-40%" },
                { img: Headphone, title: "Headphones", off: "-25%" },
                { img: Mobile, title: "Canon Cameras", off: "-25%" },
              ].map((item, i) => (
                <Col
                  // style={{ justifyContent: "center", display: "flex" }}
                  key={i}
                >
                  <Card
                    hoverable
                    style={{
                      width: 180,
                      border: "none",
                      // height:235,
                      textAlign: "center",
                      // borderRadius: 8,
                      // display:'flex',
                    }}
                    cover={
                      <div>
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{
                            width: 140,
                            height: 140,
                            objectFit: "contain",
                            marginTop: 20,
                            marginBottom: 10,
                            // paddingTop: 10,
                          }}
                        />
                      </div>
                    }
                  >
                    <Meta title={item.title} />
                    <Badge
                      count={item.off}
                      style={{
                        backgroundColor: "#f9e3e3",
                        color: "#EB001B",
                        marginTop: 10,
                        marginBottom: 20,
                        fontWeight: 600,
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
