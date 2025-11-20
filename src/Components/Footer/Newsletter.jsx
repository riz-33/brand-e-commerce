import React from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const Newsletter = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        // width: 1440,
        // height: 190,
        background: "#EFF2F4",
        display: "flex",
        justifyContent: "center",
        paddingTop: 40,
        paddingBottom:40,
      }}
    >
      <div>
        <div>
          <h4
            style={{
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Subscribe on our newsletter
          </h4>

          <p
            style={{
              fontWeight: 400,
              margin: 0,
              fontSize: "16px",
              textAlign: "center",
              color: "#606060",
            }}
          >
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
          }}
        >
          <Form layout="inline" style={{ justifyContent: "center" }}>
            <Form.Item name="email" style={{ width: 392 }}>
              <Input
                style={{ padding: 8 }}
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            </Form.Item>
            <Button
              style={{ borderRadius: "6px", padding: 18 }}
              type="primary"
              htmlType="submit"
            >
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
