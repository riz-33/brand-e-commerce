import React from "react";
import { Row, Col, Typography, Space, Divider, Flex, Button, Card } from "antd";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  GithubOutlined,
  DownOutlined,
} from "@ant-design/icons";

import "./Footer.css";
import Applogo from "../../assets/Layout/Brand/logo-colored.png";
import Android from "../../assets/Layout/Misc/Android.png";
import Apple from "../../assets/Layout/Misc/Apple.png";
import Flag from "../../assets/Layout1/Image/flags/3.png";

const { Title, Text } = Typography;

export const Footer = () => {
  return (
    <section className="footer-section">
      {/* TOP SECTION */}
      <div className="footer-container">
        <Row gutter={[40, 40]}>
          {/* ABOUT + SOCIAL */}
          <Col xs={24} sm={12} md={8} lg={4}>
            <img className="footer-logo" src={Applogo} alt="Logo" />

            <Text className="footer-description" type="secondary">
              Best information about the company goes here but now lorem ipsum
              is
            </Text>

            <Space size="middle" style={{ marginTop: 16 }}>
              <a href="#" target="_blank">
                <LinkedinFilled className="social-icon-antd" />
              </a>
              <a href="#" target="_blank">
                <FacebookFilled className="social-icon-antd" />
              </a>
              <a href="#" target="_blank">
                <InstagramFilled className="social-icon-antd" />
              </a>
              <a href="#" target="_blank">
                <GithubOutlined className="social-icon-antd" />
              </a>
            </Space>
          </Col>

          {/* COLUMNS */}
          <Col xs={12} sm={8} md={4}>
            <Title level={5}>About</Title>
            <Space direction="vertical">
              <a className="footer-link">About Us</a>
              <a className="footer-link">Find Store</a>
              <a className="footer-link">Categories</a>
              <a className="footer-link">Blogs</a>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <Title level={5}>Partnership</Title>
            <Space direction="vertical">
              <a className="footer-link">About Us</a>
              <a className="footer-link">Find Store</a>
              <a className="footer-link">Categories</a>
              <a className="footer-link">Blogs</a>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <Title level={5}>Information</Title>
            <Space direction="vertical">
              <a className="footer-link">Help Centre</a>
              <a className="footer-link">Money Refund</a>
              <a className="footer-link">Shipping</a>
              <a className="footer-link">Contact Us</a>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <Title level={5}>For Users</Title>
            <Space direction="vertical">
              <a className="footer-link">Login</a>
              <a className="footer-link">Register</a>
              <a className="footer-link">Settings</a>
              <a className="footer-link">My Orders</a>
            </Space>
          </Col>

          {/* GET APP */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5}>Get App</Title>
            <Space direction="vertical">
              <img src={Android} alt="Android" style={{ width: 120 }} />
              <img src={Apple} alt="Apple" style={{ width: 120 }} />
            </Space>
          </Col>
        </Row>
      </div>

      {/* BOTTOM SECTION */}
      <Divider />

      <Flex justify="space-between" align="center" className="footer-bottom">
        <Text type="secondary">© 2023 Ecommerce.</Text>

        <Flex align="center" gap={10}>
          <img src={Flag} width={25} alt="Flag" />
          <Text>English</Text>
          <DownOutlined />
        </Flex>
      </Flex>
    </section>
  );
};
