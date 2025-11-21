import React from "react";
import { List, Rate, Button, Card } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

import img1 from "../assets/Image/tech/8.png";
import img2 from "../assets/Image/tech/image 23.png";
import img3 from "../assets/Image/tech/7.png";
import img4 from "../assets/Image/tech/6.png";
import img5 from "../assets/Image/tech/1.png";
import img6 from "../assets/Image/tech/3.png";

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
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  img: productImages[i % productImages.length],
}));

const CartPage = () => {
  return (
    <List
      grid={{
        gutter: 24,
        column: 1,
      }}
      pagination={{
        pageSize: 6,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Card
            hoverable
            style={{
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
              padding: 16,
              boxShadow: "0px 2px 4px #0000000A",
            }}
          >
            <div style={{ display: "flex", gap: 20 }}>
              {/* IMAGE */}
              <div style={{ minWidth: 180 }}>
                <img
                  draggable={false}
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* DETAILS */}
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: 5 }}>{item.title}</h3>

                {/* PRICE */}
                <div>
                  <span style={{ fontSize: 24, fontWeight: "bold" }}>
                    ${item.price}.00
                  </span>

                  {item.oldPrice && (
                    <span
                      style={{
                        marginLeft: 10,
                        textDecoration: "line-through",
                        color: "#999",
                      }}
                    >
                      ${item.oldPrice}.00
                    </span>
                  )}
                </div>

                {/* RATING */}
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 8,
                    fontSize: "medium",
                    alignItems: "center",
                  }}
                >
                  <Rate
                    style={{ fontSize: "medium" }}
                    disabled
                    defaultValue={item.rating}
                  />

                  <span
                    style={{
                      color: "#f60",
                      fontWeight: 400,
                      fontSize: "small",
                    }}
                  >
                    {item.ratingText}
                  </span>

                  <span style={{ color: "#888" }}>{item.orders} orders</span>

                  <span style={{ color: "green", fontWeight: 500 }}>
                    {item.shipping}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p style={{ marginBottom: 10 }}>{item.description}</p>

                {/* VIEW DETAILS */}
                <Button style={{ padding: 0 }} type="link">
                  View details
                </Button>
              </div>

              {/* WISHLIST BUTTON */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <Button
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid #DEE2E7",
                    boxShadow: "1px 1px #38383814",
                  }}
                  icon={<HeartTwoTone style={{ fontSize: 22 }} />}
                />
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CartPage;
