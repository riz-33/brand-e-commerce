import React from "react";
import "./Style.css";
import { Badge, Card, Col, Row, Statistic } from "antd";
import Watch from "../../assets/Image/tech/1.png";
import Laptop from "../../assets/Image/tech/6.png";
import Camera from "../../assets/Image/tech/2.png";
import Headphone from "../../assets/Image/tech/5.png";
import Mobile from "../../assets/Image/tech/image 23.png";
const { Meta } = Card;

export const Section2 = () => {
  return (
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
        <Row style={{ justifyContent: "space-between" }}>
          <Col style={{ marginLeft: "20px" }}>
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
                  <Statistic
                    style={{ textAlign: "center" }}
                    title="04"
                    value={"Days"}
                  />
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "45px",
                    height: "60px",
                    backgroundColor: "#606060",
                    // justifyItems: "center",
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
                cover={<img className="card-image" alt="Laptop" src={Laptop} />}
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
                cover={<img className="card-image" alt="Camera" src={Camera} />}
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
                  <img className="card-image" alt="Headphone" src={Headphone} />
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
                cover={<img className="card-image" alt="Mobile" src={Mobile} />}
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
  );
};
