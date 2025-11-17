import React from "react";
import "./Style.css";
import { Badge, Button, Card, Col, Flex, List, Row, Statistic } from "antd";
import Banner from "../assets/Image/backgrounds/Banner-board-800x420 2.png";
import Avatar from "../assets/Layout/Misc/Avatar.png";
import Watch from "../assets/Image/tech/8.png";
import Laptop from "../assets/Image/tech/image 34.png";
import Camera from "../assets/Image/tech/6.png";
import Headphone from "../assets/Image/tech/image 29.png";
import Mobile from "../assets/Image/tech/image 23.png";
const { Meta } = Card;

export const HomePage = () => {
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
  // const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <div>
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
                width: "250px",
                height: "360px",
                // border: "1px solid black",
                // marginRight: "10px",
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

            <Col style={{ marginRight: "8px", marginleft: "8px" }}>
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
                  {/* Get US $10 off
                  <br />
                  with a new
                  <br />
                  supplier */}
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>

      <div
        className="section-scale"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: "1180px",
            height: "240px",
            marginTop: "3%",
            border: "1px solid #DEE2E7",
          }}
        >
          <Row >
            <Col>
              <h4
                style={{
                  height: "28px",
                  fontWeight: 600,
                  fontSize: "20px",
                  marginBottom: 0,
                }}
              >
                Deals and offers
              </h4>

              <p
                style={{
                  width: "155px",
                  height: "19px",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#8B96A5",
                  marginTop: 0,
                }}
              >
                Hygiene equipments
              </p>

              <Row
                style={{ width: "198px", height: "50px", borderRadius: "4px" }}
              >
                <Col>
                  <Card
                    style={{
                      width: "45px",
                      height: "60px",
                      backgroundColor: "#606060",
                      justifyItems: "center",
                    }}
                  >
                    <Statistic title="04" value={"Days"} />
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "45px",
                      height: "60px",
                      backgroundColor: "#606060",
                      justifyItems: "center",
                    }}
                  >
                    <Statistic title="13" value={"Hour"} />
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "45px",
                      height: "60px",
                      backgroundColor: "#606060",
                      justifyItems: "center",
                    }}
                  >
                    <Statistic title="34" value={"Min"} />
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "45px",
                      height: "60px",
                      backgroundColor: "#606060",
                      justifyItems: "center",
                    }}
                  >
                    <Statistic title="56" value={"Sec"} />
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Card
                  className="section-scale-card"
                  hoverable
                  cover={<img className="card-image" alt="Watch" src={Watch} />}
                >
                  <div>
                    <Meta title="Smart Watches" />
                    <Badge
                      style={{ backgroundColor: "#f9e3e3", color: "#EB001B" }}
                      count={"-25%"}
                    />
                  </div>
                </Card>
                <Card
                  className="section-scale-card"
                  hoverable
                  cover={
                    <img className="card-image" alt="Laptop" src={Laptop} />
                  }
                >
                  <div>
                    <Meta title="Laptops" />
                    <Badge
                      style={{ backgroundColor: "#f9e3e3", color: "#EB001B" }}
                      count={"-15%"}
                    />
                  </div>
                </Card>

                <Card
                  className="section-scale-card"
                  hoverable
                  cover={
                    <img className="card-image" alt="Camera" src={Camera} />
                  }
                >
                  <div>
                    <Meta title="GoPro Cameras" />
                    <Badge
                      style={{ backgroundColor: "#f9e3e3", color: "#EB001B" }}
                      count={"-40%"}
                    />
                  </div>
                </Card>
                <Card
                  className="section-scale-card"
                  hoverable
                  cover={
                    <img
                      width={140}
                      height={140}
                      alt="Headphone"
                      src={Headphone}
                    />
                  }
                >
                  <div>
                    <Meta title="Headphones" />
                    <Badge
                      style={{ backgroundColor: "#f9e3e3", color: "#EB001B" }}
                      count={"-25%"}
                    />
                  </div>
                </Card>
                <Card
                  className="section-scale-card"
                  hoverable
                  cover={
                    <img className="card-image" alt="Mobile" src={Mobile} />
                  }
                >
                  <div>
                    <Meta title="Canon Cameras" />
                    <Badge
                      style={{ backgroundColor: "#f9e3e3", color: "#EB001B" }}
                      count={"-25%"}
                    />
                  </div>
                </Card>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};
