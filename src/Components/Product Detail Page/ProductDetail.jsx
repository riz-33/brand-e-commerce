import React from "react";
import {
  Row,
  Col,
  Card,
  Tabs,
  Rate,
  Divider,
  Button,
  List,
  Avatar,
} from "antd";
import {
  HeartOutlined,
  StarFilled,
  CheckCircleTwoTone,
  ShareAltOutlined,
} from "@ant-design/icons";
import SellerCard from "./SellerCard";
import RelatedProducts from "./RelatedProducts";
import "./product-detail.css";
import img from "../../assets/Image/product/image 34.png";
import thumb1 from "../../assets/Image/product/image 38.png";
import thumb2 from "../../assets/Image/product/image 35.png";
import thumb3 from "../../assets/Image/product/image 40.png";
import thumb4 from "../../assets/Image/product/image 36.png";
import thumb5 from "../../assets/Image/product/image 37.png";
import thumb6 from "../../assets/Image/product/image 39.png";
import img1 from "../../assets/Layout/alibaba/Image/cloth/image 30.png";
import img2 from "../../assets/Layout/alibaba/Image/cloth/Bitmap.png";
import img3 from "../../assets/Layout/alibaba/Image/cloth/2 1.png";
import img4 from "../../assets/Layout/alibaba/Image/cloth/image 25.png";
import img5 from "../../assets/Layout/alibaba/Image/cloth/image 26.png";

// NOTE: If using antd v5 import reset css in your root (e.g. index.js):
// import "antd/dist/reset.css";

const { TabPane } = Tabs;

const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
const items = [
  {
    title: "Men Blazers Sets Elegant Formal",
    price: "$7.00 - $99.50",
    img: img1,
  },
  {
    title: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50",
    img: img2,
  },
  {
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
    img: img3,
  },
  {
    title: "Basketball Crew Socks Long Stuff",
    price: "$7.00 - $99.50",
    img: img4,
  },
  {
    title: "New Summer Men's Castrol T-Shirts",
    price: "$7.00 - $99.50",
    img: img5,
  },
];

const ProductDetail = () => {
  return (
    <div className="pd-container">
      <div className="pd-inner">
        {/* Top product area */}
        <Card className="pd-card" bordered={false}>
          <Row gutter={[24, 24]}>
            {/* Left: gallery */}
            <Col xs={24} lg={8}>
              <div className="gallery-card">
                <div className="main-image-wrap">
                  <img src={img} alt="product" className="main-image" />
                </div>

                <div className="thumbs-row">
                  {thumbnails.map((t, i) => (
                    <div
                      key={i}
                      className={`thumb-item ${i === 0 ? "thumb-active" : ""}`}
                    >
                      <img src={t} alt={`thumb-${i}`} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Middle: product details */}
            <Col xs={24} lg={10}>
              <div className="product-meta">
                <div className="availability">
                  <CheckCircleTwoTone twoToneColor="#16a34a" />
                  <span className="in-stock">In stock</span>
                </div>

                <h2 className="product-title">
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </h2>

                <div className="rating-row">
                  <Rate disabled defaultValue={4} character={<StarFilled />} />
                  <span className="rating-value">9.3</span>
                  <span className="reviews">32 reviews</span>
                  <span className="sold">154 sold</span>
                </div>

                <div className="price-box">
                  <div className="price-item price-high">
                    <div style={{ color: "#FA3434" }} className="price-amount">
                      $98.00
                    </div>
                    <div className="price-range">50-100 pcs</div>
                  </div>
                  <div className="price-item price-mid">
                    <div className="price-amount">$90.00</div>
                    <div className="price-range">100-700 pcs</div>
                  </div>
                  <div className="price-item price-low">
                    <div className="price-amount">$78.00</div>
                    <div className="price-range">700+ pcs</div>
                  </div>
                </div>

                <div>
                  <Row>
                    <Col span={6} className="spec-label">
                      <div className="spec-row">
                        <p>Price:</p>
                      </div>
                      <div className="spec-row">
                        <p>Type:</p>
                        <p>Material:</p>
                        <p>Design:</p>
                      </div>
                      <div className="spec-row">
                        <p>Customization:</p>
                        <p>Protection:</p>
                        <p>Warranty:</p>
                      </div>
                    </Col>
                    <Col span={18}>
                      <div className="spec-row">
                        <p>Negotiable</p>
                      </div>
                      <div className="spec-row">
                        <p>Classic Shoes</p>
                        <p>Plastic Material</p>
                        <p>Modern Nice</p>
                      </div>
                      <div className="spec-row">
                        <p>Customized Logo and Design Custom Packages</p>
                        <p>Refund Policy</p>
                        <p>2 Years Full Warranty</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* Right: seller card */}
            <Col xs={24} lg={6}>
              <SellerCard />
            </Col>
          </Row>
        </Card>

        {/* Tabs + Right small sidebar */}
        <div className="tabs-area">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={19}>
              <Card bordered={false} className="tabs-card">
                <Tabs defaultActiveKey="1" className="pd-tabs">
                  <TabPane tab="Description" key="1">
                    <p className="desc-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, Quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="spec-table">
                      <table>
                        <tbody>
                          <tr>
                            <td className="table-heading">Model</td>
                            <td>#8786867</td>
                          </tr>
                          <tr>
                            <td className="table-heading">Style</td>
                            <td>Classic style</td>
                          </tr>
                          <tr>
                            <td className="table-heading">Certificate</td>
                            <td>ISO-898921212</td>
                          </tr>
                          <tr>
                            <td className="table-heading">Size</td>
                            <td>34mm x 450mm x 19mm</td>
                          </tr>
                          <tr>
                            <td className="table-heading">Memory</td>
                            <td>36GB RAM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <ul className="feature-list">
                      <li>Some great feature name here</li>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                      <li>Duis aute irure dolor in reprehenderit</li>
                    </ul>
                  </TabPane>

                  <TabPane tab="Reviews" key="2">
                    <p>Customer reviews will show here.</p>
                  </TabPane>

                  <TabPane tab="Shipping" key="3">
                    <p>Shipping & delivery details.</p>
                  </TabPane>

                  <TabPane tab="About seller" key="4">
                    <p>About the seller section.</p>
                  </TabPane>
                </Tabs>
              </Card>
            </Col>

            <Col xs={24} lg={5}>
              <Card bordered={false} className="you-like-card">
                <h4 className="you-like-title">You may like</h4>
                <List
                  itemLayout="horizontal"
                  dataSource={items}
                  renderItem={(item, i) => (
                    <List.Item key={i}>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            className="like-avatar"
                            shape="square"
                            size={64}
                            src={item.img}
                          />
                        }
                        title={<div className="like-title">{item.title}</div>}
                        description={
                          <div className="like-price">{item.price}</div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Related products */}
        <div className="related-section">
          <RelatedProducts />
        </div>

        {/* Discount banner */}
        <div className="discount-banner">
          <div className="banner-inner">
            <div>
              <h3>Super discount on more than 100 USD</h3>
              <p>Have you ever finally just write dummy info</p>
            </div>
            <div>
              <Button type="primary" className="banner-cta">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
