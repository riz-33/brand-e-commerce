import React from "react";
import { Button, Card, Col, Row } from "antd";
import img1 from "../../assets/Layout/alibaba/Image/cloth/image 24.png";
import img2 from "../../assets/Image/tech/1.png";
import img3 from "../../assets/Layout/alibaba/Image/tech/image 86.png";
import img4 from "../../assets/Layout/alibaba/Image/cloth/Bitmap (2).png";
import { ShoppingCartOutlined } from "@ant-design/icons";

const items = [
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img1,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img2,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img3,
  },
  {
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: img4,
  },
];

export const CartLater = () => {
  return (
    <Card
      title="Saved for Later"
      style={{ marginTop: 20, padding: "20px 30px", borderRadius: 12 }}
    >
      <Row gutter={16}>
        {items.map((item, i) => (
          <Col span={6}>
            <div
              style={{
                width: 270,
                height: 240,
                border: "1px solid #EEEEEE",
                // backgroundColor:'#eeee',
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: 225, height: 225, objectFit: "contain" }}
                src={item.img}
                alt=""
              />
            </div>
            <div style={{ fontWeight: 600, marginBlock: "2px" }}>$99.50</div>
            <div
              style={{
                color: "#606060",
                paddingRight: 150,
                marginBlock: "5px",
              }}
            >
              GoPro HERO6 4K Action Camera - Black
            </div>

            <Button
              style={{ fontWeight:600 }}
              type="primary"
              icon={<ShoppingCartOutlined />}
              color="primary"
              variant="outlined"
            >
              Move to Cart
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
    // </div>
  );
};
