import React from "react";
import { Card, Avatar, Button, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  CheckCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./product-detail.css";
import flag from "../../assets/Layout1/Image/flags/DE@2x.png";
import verified from "../../assets/Layout1/Image/icons/5.png";
import world from "../../assets/Layout1/Image/icons/6.png";

const SellerCard = () => {
  return (
    <Card className="seller-card">
      <div className="seller-top">
        <Avatar
          shape="square"
          size={48}
          style={{
            backgroundColor: "#C6F3F1",
            color: "rgba(76, 167, 167, 0.6)",
            fontWeight: 600,
            fontSize: 28,
          }}
        >
          R
        </Avatar>
        <div className="seller-info">
          <div className="seller-name">Supplier</div>
          <div className="seller-name">Guanjoi Trading LLC</div>
        </div>
      </div>

      <div className="seller-meta">
        <Row>
          <Col span={3} className="meta-col">
            <Col>
              <img src={flag} alt="" />
            </Col>
            <Col>
              <img src={verified} alt="" />
            </Col>
            <Col>
              <img src={world} alt="" />
            </Col>
          </Col>
          <Col>
            <Col>Germany, Berlin</Col>
            <Col>Verified Seller</Col>
            <Col>Worldwide shipping</Col>
          </Col>
        </Row>
      </div>

      {/* <div className="seller-meta">
        <div className="meta-row">
          <img src={flag} alt="" />
          <span>Germany, Berlin</span>
        </div>
        <div className="meta-row">
          <img src={verified} alt="" />
          <span>Verified Seller</span>
        </div>
        <div className="meta-row">
          <img src={world} alt="" />
          <span>Worldwide shipping</span>
        </div>
      </div> */}

      <div className="seller-actions">
        <Button type="primary" block>
          Send inquiry
        </Button>
        <Button block>Seller's profile</Button>
        <div className="save-link">
          <HeartOutlined />
          Save for later
        </div>
      </div>
    </Card>
  );
};

export default SellerCard;
