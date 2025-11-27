import React from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Select,
  Divider,
  Card,
  Form,
  Space,
  InputNumber,
  Input,
} from "antd";
import img1 from "../../assets/Layout/alibaba/Image/cloth/Bitmap.png";
import img2 from "../../assets/Layout/alibaba/Image/cloth/image 26.png";
import img3 from "../../assets/Image/interior/2.png";
import { ArrowLeftOutlined } from "@ant-design/icons";
import pay1 from "../../assets/Layout/Misc/payment1.png";
import pay2 from "../../assets/Layout/Misc/payment2.png";
import pay3 from "../../assets/Layout/Misc/payment3.png";
import pay4 from "../../assets/Layout/Misc/payment4.png";
import pay5 from "../../assets/Layout/Misc/payment5.png";
import icon1 from "../../assets/Layout/Misc/icon1.png";
import icon2 from "../../assets/Layout/Misc/icon2.png";
import icon3 from "../../assets/Layout/Misc/icon3.png";

const { Text } = Typography;

const CartItem = () => {
  const cartData = [
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      size: "Medium",
      color: "Blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "78.99",
      qty: 9,
      img: img1,
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      size: "Medium",
      color: "Blue",
      material: "Plastic",
      seller: "Best Factory LLC",
      price: "39.00",
      qty: 3,
      img: img2,
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      size: "Medium",
      color: "Blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "170.50",
      qty: 1,
      img: img3,
    },
  ];

  return (
    <div>
      <h2>My Cart (3)</h2>
      <Row gutter={16}>
        <Col span={18}>
          <Card
            style={{
              // maxWidth: 900,
              // margin: "40px auto",
              padding: "20px 30px",
              borderRadius: 12,
            }}
          >
            {cartData.map((item) => (
              <React.Fragment key={item.id}>
                <Row gutter={16} style={{ padding: "20px 0" }}>
                  <Col
                    // flex="100px"
                    style={{
                      border: "1px solid #E0E0E0",
                      width: 80,
                      height: 80,
                      // backgroundColor: "#F7F7F7",
                      borderRadius: 8,
                      alignContent: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        alignItems: "center",
                        objectFit: "contain",
                        width: 70,
                        height: 70,
                      }}
                    />
                  </Col>

                  {/* Description */}
                  <Col flex="auto">
                    <Text strong style={{ fontSize: 16 }}>
                      {item.title}
                    </Text>

                    <div style={{ marginTop: 4 }}>
                      <Text type="secondary">
                        Size: {item.size}, Color: {item.color}, Material:{" "}
                        {item.material}
                      </Text>
                    </div>

                    <div>
                      <Text type="secondary">Seller: {item.seller}</Text>
                    </div>

                    {/* Buttons */}
                    <div style={{ marginTop: 10 }}>
                      <Button
                        size="small"
                        style={{
                          marginRight: 10,
                          color: "#FA3434",
                          fontWeight: 500,
                        }}
                      >
                        Remove
                      </Button>
                      <Button
                        size="small"
                        style={{
                          marginRight: 10,
                          color: "#0D6EFD",
                          fontWeight: 500,
                        }}
                      >
                        Save for later
                      </Button>
                    </div>
                  </Col>

                  {/* Price + Qty */}
                  <Col flex="120px" style={{ textAlign: "right" }}>
                    <Text strong style={{ fontSize: 16 }}>
                      ${item.price}
                    </Text>

                    <Select
                      size="small"
                      value={item.qty}
                      style={{ marginTop: 10, width: 90 }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <Select.Option key={i + 1} value={i + 1}>
                          Qty: {i + 1}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>

                <Divider />
              </React.Fragment>
            ))}

            {/* Footer Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <Button type="primary" size="large">
                <ArrowLeftOutlined /> Back to shop
              </Button>
              <Button
                size="large"
                style={{ color: "#0D6EFD", fontWeight: 500 }}
              >
                Remove all
              </Button>
            </div>
          </Card>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 40px 0 0",
            }}
          >
            <div style={{ display: "flex" }}>
              <img style={{ marginRight: 10 }} src={icon1} alt="icon1" />
              <div>
                <Typography>Secure Payment</Typography>
                <Typography style={{ color: "#A9ACB0" }}>
                  Have you ever finally just{" "}
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img style={{ marginRight: 10 }} src={icon2} alt="icon2" />
              <div>
                <Typography>Customer Support</Typography>
                <Typography style={{ color: "#A9ACB0" }}>
                  Have you ever finally just{" "}
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img style={{ marginRight: 10 }} src={icon3} alt="icon3" />
              <div>
                <Typography>Free Delivery</Typography>
                <Typography style={{ color: "#A9ACB0" }}>
                  Have you ever finally just{" "}
                </Typography>
              </div>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <Card style={{ padding: "15px 10px", paddingBottom: 20 }}>
            Have a Coupon?
            <Space.Compact style={{ width: "100%", marginTop: 10 }}>
              <Input placeholder="Add coupon" />
              <Button style={{ color: "#0D6EFD", fontWeight: 500 }}>
                Apply
              </Button>
            </Space.Compact>
          </Card>

          <Card style={{ marginTop: "10px", padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Subtotal:</Typography>
              <Typography>$1403.97</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Discount:</Typography>
              <Typography style={{ color: "#FA3434" }}>- $60.00</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Tax:</Typography>
              <Typography style={{ color: "#00B517" }}>+ $14.00</Typography>
            </div>

            <Divider />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontWeight: 600, fontSize: "16px" }}>
                Total:
              </Typography>
              <Typography style={{ fontWeight: 600, fontSize: "20px" }}>
                $1357.97
              </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  padding: "20px",
                  backgroundColor: "#00B517",
                  margin: 20,
                  width: "100%",
                }}
                color="white"
                variant="solid"
              >
                Checkout
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                paddingInline: 20,
              }}
            >
              <img src={pay1} alt="pay1" />
              <img src={pay2} alt="pay2" />
              <img src={pay3} alt="pay3" />
              <img src={pay4} alt="pay4" />
              <img src={pay5} alt="pay5" />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
