import React, { useState } from "react";
import {
  Layout,
  Breadcrumb,
  Collapse,
  Checkbox,
  Slider,
  Input,
  Button,
  Rate,
  Space,
  Select,
  List,
  Card,
  Row,
  Col,
  theme,
} from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  HeartTwoTone,
} from "@ant-design/icons";

import img1 from "../assets/Image/tech/8.png";
import img2 from "../assets/Image/tech/image 23.png";
import img3 from "../assets/Image/tech/7.png";
import img4 from "../assets/Image/tech/6.png";
import img5 from "../assets/Image/tech/1.png";
import img6 from "../assets/Image/tech/3.png";

const { Panel } = Collapse;
const { Option } = Select;

const productImages = [img1, img2, img3, img4, img5, img6];

const data = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  title: "GoPro HERO6 4K Action Camera - Black",
  price: 998,
  oldPrice: i % 2 === 0 ? 1128 : null,
  rating: 4,
  ratingText: "7.5",
  orders: 154,
  shipping: "Free Shipping",
  description:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  img: productImages[i % productImages.length],
}));

const ProductPage = () => {
  const [price, setPrice] = useState([0, 999999]);
  const [view, setView] = useState("list");
  const [verifiedOnly, setVerifiedOnly] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const totalItems = 12911;

  const paginationConfig = {
    pageSize: 6,
    showSizeChanger: false,
  };

  const paginationConfig2 = {
    pageSize: 9,
    showSizeChanger: false,
  };

  const cardBoxStyle = {
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
    padding: 16,
    boxShadow: "0px 2px 4px #0000000A",
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f7fa" }}>
      <div style={{ padding: "16px 48px", width: "100%" }}>
        <Breadcrumb
          style={{ margin: "8px 0 16px 0" }}
          items={[
            { title: "Home" },
            { title: "Clothings" },
            { title: "Men's Wear" },
            { title: "Summer clothing" },
          ]}
        />

        <Layout
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Layout.Sider
            width={260}
            style={{
              background: "#fff",
              padding: 12,
              borderRight: "1px solid #eef0f3",
            }}
          >
            <Collapse defaultActiveKey={["1", "2", "3", "4", "5", "6"]} ghost>
              <Panel header="Category" key="1">
                <Space direction="vertical">
                  <span>Mobile accessory</span>
                  <span>Electronics</span>
                  <span>Smartphones</span>
                  <span>Modern tech</span>
                  <Button type="link" size="small">
                    See all
                  </Button>
                </Space>
              </Panel>

              <Panel
                style={{ display: "table-caption" }}
                header="Brands"
                key="2"
              >
                <Checkbox.Group
                  options={["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]}
                />
                <div style={{ marginTop: 8 }}>
                  <Button type="link" size="small">
                    See all
                  </Button>
                </div>
              </Panel>

              <Panel
                style={{ display: "table-caption" }}
                header="Features"
                key="3"
              >
                <Checkbox.Group
                  style={{ width: "125px" }}
                  options={[
                    "Metallic",
                    "Plastic cover",
                    "8GB RAM",
                    "Super power",
                    "Large Memory",
                  ]}
                />
                <div style={{ marginTop: 8 }}>
                  <Button type="link" size="small">
                    See all
                  </Button>
                </div>
              </Panel>

              <Panel header="Price range" key="4">
                <Slider range value={price} max={999999} onChange={setPrice} />
                <Space style={{ marginTop: 8 }}>
                  <Input
                    value={price[0]}
                    onChange={(e) =>
                      setPrice([Number(e.target.value || 0), price[1]])
                    }
                    placeholder="Min"
                    style={{ width: 100 }}
                  />
                  <Input
                    value={price[1]}
                    onChange={(e) =>
                      setPrice([price[0], Number(e.target.value || 0)])
                    }
                    placeholder="Max"
                    style={{ width: 100 }}
                  />
                </Space>
                <div style={{ marginTop: 8 }}>
                  <Button type="primary">Apply</Button>
                </div>
              </Panel>

              <Panel
                style={{ display: "table-caption" }}
                header="Condition"
                key="5"
              >
                <Checkbox.Group
                  options={["Any", "Refurbished", "Brand new", "Old items"]}
                />
              </Panel>

              <Panel header="Ratings" key="6">
                <Space direction="vertical">
                  <Rate disabled defaultValue={5} />
                  <Rate disabled defaultValue={4} />
                  <Rate disabled defaultValue={3} />
                  <Rate disabled defaultValue={2} />
                </Space>
              </Panel>
            </Collapse>
          </Layout.Sider>

          <Layout style={{ padding: "0 24px", minHeight: 280 }}>
            <Layout.Content style={{ background: "transparent" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                  background: "#fff",
                  padding: "12px 16px",
                  borderRadius: 8,
                  border: "1px solid #eef0f3",
                }}
              >
                <div style={{ fontSize: 16 }}>
                  {totalItems.toLocaleString()} items in
                  <strong> Mobile accessory</strong>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Checkbox
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                  >
                    Verified only
                  </Checkbox>

                  <Select defaultValue="Featured" style={{ width: 150 }}>
                    <Option value="Featured">Featured</Option>
                    <Option value="Popular">Popular</Option>
                    <Option value="Latest">Latest</Option>
                    <Option value="PriceLowHigh">Price: Low → High</Option>
                    <Option value="PriceHighLow">Price: High → Low</Option>
                  </Select>

                  <Button
                    type={view === "grid" ? "primary" : "default"}
                    icon={<AppstoreOutlined />}
                    onClick={() => setView("grid")}
                  />
                  <Button
                    type={view === "list" ? "primary" : "default"}
                    icon={<BarsOutlined />}
                    onClick={() => setView("list")}
                  />
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                {view === "list" && (
                  <List
                    dataSource={data}
                    itemLayout="vertical"
                    pagination={paginationConfig}
                    renderItem={(item) => (
                      <List.Item
                        key={item.id}
                        style={{ padding: 0, marginBottom: 16 }}
                      >
                        <Card style={cardBoxStyle} bodyStyle={{ padding: 0 }}>
                          <div
                            style={{ display: "flex", gap: 20, padding: 12 }}
                          >
                            <div style={{ minWidth: 180 }}>
                              <img
                                draggable={false}
                                src={item.img}
                                alt={item.title}
                                style={{
                                  width: 180,
                                  height: 180,
                                  objectFit: "contain",
                                  display: "block",
                                }}
                              />
                            </div>

                            <div style={{ flex: 1 }}>
                              <h3 style={{ marginBottom: 6 }}>{item.title}</h3>

                              <div style={{ marginBottom: 8 }}>
                                <span style={{ fontSize: 22, fontWeight: 700 }}>
                                  ${item.price}.00
                                </span>
                                {item.oldPrice && (
                                  <span
                                    style={{
                                      marginLeft: 12,
                                      textDecoration: "line-through",
                                      color: "#999",
                                    }}
                                  >
                                    ${item.oldPrice}.00
                                  </span>
                                )}
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  gap: 12,
                                  marginBottom: 10,
                                  alignItems: "center",
                                }}
                              >
                                <Rate disabled defaultValue={item.rating} />
                                <span style={{ color: "#f60" }}>
                                  {item.ratingText}
                                </span>
                                <span style={{ color: "#888" }}>
                                  {item.orders} orders
                                </span>
                                <span
                                  style={{ color: "green", fontWeight: 500 }}
                                >
                                  {item.shipping}
                                </span>
                              </div>

                              <p style={{ marginBottom: 10, color: "#505050" }}>
                                {item.description}
                              </p>

                              <Button type="link" style={{ padding: 0 }}>
                                View details
                              </Button>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <Button
                                style={{
                                  width: 44,
                                  height: 44,
                                  border: "1px solid #DEE2E7",
                                  boxShadow: "1px 1px #38383814",
                                  borderRadius: 8,
                                }}
                                icon={<HeartTwoTone style={{ fontSize: 20 }} />}
                              />
                            </div>
                          </div>
                        </Card>
                      </List.Item>
                    )}
                  />
                )}

                {view === "grid" && (
                  <List
                    grid={{
                      gutter: 24,
                      column: 3,
                    }}
                    dataSource={data}
                    pagination={paginationConfig2}
                    renderItem={(item) => (
                      <List.Item key={item.id}>
                        <Card
                          hoverable
                          style={{
                            borderRadius: 8,
                            overflow: "hidden",
                            background: "#fff",
                            boxShadow: "0px 2px 4px #0000000A",
                          }}
                          bodyStyle={{ padding: 12 }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: 180,
                                borderBottom: "1px solid #EFF2F4",
                              }}
                            >
                              <img
                                draggable={false}
                                src={item.img}
                                alt={item.title}
                                style={{
                                  width: 230,
                                  maxHeight: 160,
                                  objectFit: "contain",
                                }}
                              />
                            </div>

                            <div>
                              <Row
                                style={{ justifyContent: "center", margin: 10 }}
                              >
                                <Col span={20}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 8,
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: 18, fontWeight: 700 }}
                                    >
                                      ${item.price}.00
                                    </span>
                                    {item.oldPrice && (
                                      <span
                                        style={{
                                          textDecoration: "line-through",
                                          color: "#999",
                                          marginLeft: 8,
                                        }}
                                      >
                                        ${item.oldPrice}.00
                                      </span>
                                    )}
                                  </div>

                                  <div
                                    style={{
                                      display: "flex",
                                      gap: 8,
                                      alignItems: "center",
                                      marginTop: 8,
                                    }}
                                  >
                                    <Rate disabled defaultValue={item.rating} />
                                    <span style={{ color: "#f60" }}>
                                      {item.ratingText}
                                    </span>
                                    <span style={{ color: "#888" }}>
                                      {item.orders} orders
                                    </span>
                                  </div>
                                  <p
                                    style={{
                                      margin: "6px 0",
                                      color: "#606060",
                                      fontWeight: "400",
                                      fontSize: "16px",
                                    }}
                                  >
                                    {item.title}
                                  </p>
                                </Col>
                                <Col>
                                  <div
                                    style={{
                                      marginTop: 8,
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Button
                                      style={{
                                        border: "1px solid #DEE2E7",
                                        boxShadow: "1px 1px #38383814",
                                        borderRadius: 8,
                                      }}
                                      icon={
                                        <HeartTwoTone
                                          style={{ fontSize: 18 }}
                                        />
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Card>
                      </List.Item>
                    )}
                  />
                )}
              </div>
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    </Layout>
  );
};

export default ProductPage;
