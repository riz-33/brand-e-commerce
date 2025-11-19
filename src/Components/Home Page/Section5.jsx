import React from "react";
import "./Style.css";
import bg from "../../assets/Image/backgrounds/Group 982.png";
import { Card, Col, Row, Button, Form, Input, Select } from "antd";

export const Section5 = () => {
  const layout = {
    wrapperCol: { span: 22 },
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div
      className="section-inquiry"
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Card
        className="section-inquiry-card"
        style={{
          backgroundImage: `url("${bg}")`,
          width: "1180px",
          height: "420px",
          marginTop: "3%",
          border: "1px solid #E0E0E0",
        }}
      >
        <Row>
          <Col span={12} style={{ padding: "20px 130px 0px 40px" }}>
            <h1
              style={{
                color: "white",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "48px",
              }}
            >
              An easy way to send requests to all suppliers
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                marginTop: "16px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </Col>

          <Col
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "40px",
              padding: "30px 10px 0px 40px",
            }}
          >
            <Card
              className="section-inquiry-card"
              style={{
                width: "491px",
                height: "346px",
                borderRadius: "6px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
              title="Send quote to suppliers"
            >
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ marginLeft: 20 }}
              >
                <Form.Item>
                  <Input defaultValue="What item you need?" />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea rows={2} placeholder="Type more details" />
                </Form.Item>

                <Form.Item>
                  <Row gutter={6}>
                    <Col>
                      <Input defaultValue="Quantity" />
                    </Col>
                    <Col span={8}>
                      <Select allowClear defaultValue="Pcs" />
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Send Inquiry
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
