import React from "react";
import "./Style.css";
import { Button, Card, Col, List, Row } from "antd";
import Banner from "../../assets/Image/backgrounds/Banner-board-800x420 2.png";
import Avatar from "../../assets/Layout/Misc/Avatar.png";

const Section1 = () => {
  const data = ["Automobiles"];
  const data2 = [
    "Colthes and Wear",
    "Home Interiors",
    "Computer and Tech",
    "Tools, Equipments",
    "Sports and Outdoors",
    "Animals and Pets",
    "Machinery Tools",
    "More Category",
  ];

  return (
    <div
      className="section-main"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          paddingTop: "20px",
          paddingLeft: "5px",
          width: "1180px",
          height: "400px",
          top: "10px",
          borderRadius: "8px",
          border: "1px solid #DEE2E7",
        }}
        >
        <Row>
          <Col
            style={{
              marginLeft: 10,
              width: "250px",
              height: "360px",
              // border: "1px solid black",
              marginRight: "5px",
            }}
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  style={{
                    borderBlockEnd: "none",
                    height: "41px",
                    backgroundColor: "#e5f1ff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
            <List
              dataSource={data2}
              renderItem={(item) => (
                <List.Item
                  style={{
                    borderBlockEnd: "none",
                    height: "41px",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Col>

          <Col style={{ marginRight: "8px" }}>
            <img
              src={Banner}
              alt="banner"
              style={{
                width: "665px",
                height: "360px",
                border: "1px solid white",
              }}
            />
          </Col>
          <Col>
            <Row
              style={{
                width: "200px",
                height: "150px",
                borderRadius: "6px",
                backgroundColor: "#E3F0FF",
                marginBottom: "11px",
              }}
            >
              <Col>
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginTop: "12px",
                    margin: "12px",
                  }}
                ></img>
              </Col>
              <Col>
                <p
                  style={{
                    width: "112px",
                    height: "38px",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "100%",
                  }}
                >
                  Hi, user
                  <br />
                  let’s get stated
                </p>
              </Col>
              <Row>
                <Button
                  type="primary"
                  style={{
                    width: "180px",
                    height: "30px",
                    marginBottom: "5px",
                    borderRadius: "6px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    gap: "10px",
                  }}
                >
                  Join Now
                </Button>
              </Row>
              <Row>
                <Button
                  style={{
                    width: "180px",
                    height: "30px",
                    borderRadius: "6px",
                    marginRight: "10px",
                    marginBottom: "12px",
                    marginLeft: "10px",
                    gap: "10px",
                    border: "1px solid white",
                    color: "#0D6EFD",
                  }}
                >
                  Log in
                </Button>
              </Row>
            </Row>

            <Row
              style={{
                width: "200px",
                height: "95px",
                borderRadius: "6px",
                backgroundColor: "#F38332",
                color: "white",
                marginBottom: "11px",
              }}
            >
              <p
                style={{
                  width: "144px",
                  height: "57px",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  margin: "20px",
                }}
              >
                Get US $10 off
                <br />
                with a new
                <br />
                supplier
              </p>
            </Row>
            <Row
              style={{
                width: "200px",
                height: "95px",
                borderRadius: "6px",
                backgroundColor: "#55BDC3",
                color: "white",
                // marginBottom: "5px",
              }}
            >
              <p
                style={{
                  width: "140px",
                  height: "57px",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  margin: "20px",
                }}
              >
                Send quotes with supplier preferences
              </p>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Section1;
