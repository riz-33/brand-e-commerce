import React from "react";
import { Card, Col, Row, Typography } from "antd";
import UAE from "../../assets/Layout1/Image/flags/1.png";
import AUS from "../../assets/Layout1/Image/flags/2.png";
import USA from "../../assets/Layout1/Image/flags/3.png";
import RUS from "../../assets/Layout1/Image/flags/4.png";
import ITA from "../../assets/Layout1/Image/flags/5.png";
import DEN from "../../assets/Layout1/Image/flags/6.png";
import FRA from "../../assets/Layout1/Image/flags/7.png";
import CHI from "../../assets/Layout1/Image/flags/9.png";
import GB from "../../assets/Layout1/Image/flags/10.png";

export const Section8 = () => {
  const items = [
    {
      title: "Arabic Emirates",
      description: "shopname.ae",
      img: UAE,
    },
    {
      title: "Australia",
      description: "shopname.ae",
      img: AUS,
    },
    {
      title: "United States",
      description: "shopname.ae",
      img: USA,
    },
    {
      title: "Russia",
      description: "shopname.ru",
      img: RUS,
    },
    {
      title: "Italy",
      description: "shopname.it",
      img: ITA,
    },
    {
      title: "Denmark",
      description: "shopname.dk",
      img: DEN,
    },
    {
      title: "France",
      description: "shopname.fr",
      img: FRA,
    },
    {
      title: "Arabic Emirates",
      description: "shopname.ae",
      img: UAE,
    },
    {
      title: "China",
      description: "shopname.ae",
      img: CHI,
    },
    {
      title: "Great Britain",
      description: "shopname.uk",
      img: GB,
    },
  ];

  return (
    <div
      className="section-country"
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1177px",
          height: "138px",
        }}
      >
        <h3 style={{ padding: 0, margin: 12, marginLeft: 0 }}>
          Suppliers by Region
        </h3>

        <Row gutter={[12, 12]} style={{ justifyContent: "space-between" }}>
          {items.map((item, i) => (
            <Col key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: 221,
                  height: 36,
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: 28,
                    height: 20,
                    marginRight: 12,
                  }}
                />
                <div>
                  <Typography>{item.title}</Typography>

                  <Typography
                    style={{
                      color: "#8B96A5",
                      lineHeight: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
