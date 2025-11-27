import React from "react";
import { Button, Card, Col, List, Row } from "antd";
import "./Style.css";

import Banner from "../../assets/Image/backgrounds/Banner-board-800x420 2.png";
import Avatar from "../../assets/Layout/Misc/Avatar.png";

const Section1 = () => {
  const mainCategory = ["Automobiles"];
  const subCategories = [
    "Clothes and Wear",
    "Home Interiors",
    "Computer and Tech",
    "Tools & Equipment",
    "Sports and Outdoors",
    "Animals and Pets",
    "Machinery Tools",
    "More Categories",
  ];

  return (
    <div className="section1-wrapper">
      <Card className="section1-card">
        <Row gutter={[16, 16]}>
          
          {/* LEFT CATEGORY MENU */}
          <Col xs={24} sm={8} md={6} lg={6}>
            <List
              dataSource={mainCategory}
              renderItem={(item) => (
                <List.Item className="category-main">{item}</List.Item>
              )}
            />

            <List
              dataSource={subCategories}
              renderItem={(item) => (
                <List.Item className="category-item hoverable">{item}</List.Item>
              )}
            />
          </Col>

          {/* CENTER BANNER */}
          <Col xs={24} sm={16} md={12} lg={14}>
            <img src={Banner} alt="Category Banner" className="banner-img" />
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col xs={24} md={6} lg={4}>
            {/* User Card */}
            <Card className="user-card">
              <Row>
                <Col flex="50px">
                  <img src={Avatar} alt="avatar" className="user-avatar" />
                </Col>

                <Col flex="auto">
                  <p className="user-greeting">
                    Hi, User <br /> let’s get started
                  </p>
                </Col>

                <Col span={24}>
                  <Button type="primary" block className="btn-primary">
                    Join Now
                  </Button>
                </Col>

                <Col span={24}>
                  <Button block className="btn-outline">
                    Log in
                  </Button>
                </Col>
              </Row>
            </Card>

            {/* Discount Box */}
            <Card className="discount-card orange-bg">
              <p className="discount-text">
                Get US $10 off <br />
                with a new <br />
                supplier
              </p>
            </Card>

            {/* Supplier Box */}
            <Card className="discount-card teal-bg">
              <p className="discount-text">Send quotes with supplier preferences</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Section1;
