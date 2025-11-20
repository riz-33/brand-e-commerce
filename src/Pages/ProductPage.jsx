import React, { useState } from "react";
import {
  Breadcrumb,
  Layout,
  Collapse,
  Checkbox,
  Slider,
  Input,
  Button,
  Rate,
  Space,
  theme,
} from "antd";
import Column from "antd/es/table/Column";

const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

export const ProductPage = () => {
  const [price, setPrice] = useState([0, 999999]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <div style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 40px" }}
          items={[
            { title: "Home" },
            { title: "Clothings" },
            { title: "Men's Wear" },
            { title: "Summer Clothing" },
          ]}
        />

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider width={260} style={{ background: "white", padding: 10 }}>
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

              {/* Brands */}
              <Panel
                header="Brands"
                key="2"
                style={{ display: "table-caption" }}
              >
                <Checkbox.Group
                  options={["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]}
                />
                <Button type="link" size="small">
                  See all
                </Button>
              </Panel>

              {/* Features */}
              <Panel header="Features" key="3"
                style={{ display: "table-caption" }}
              >
                <Checkbox.Group
                  options={[
                    "Metallic",
                    "Plastic cover",
                    "8GB RAM",
                    "Super power",
                    "Large Memory",
                  ]}
                />
                <Button type="link" size="small">
                  See all
                </Button>
              </Panel>

              {/* Price Range */}
              <Panel header="Price range" key="4">
                <Slider range value={price} max={999999} onChange={setPrice} />
                <Space>
                  <Input
                    value={price[0]}
                    onChange={(e) =>
                      setPrice([Number(e.target.value), price[1]])
                    }
                  />
                  <Input
                    value={price[1]}
                    onChange={(e) =>
                      setPrice([price[0], Number(e.target.value)])
                    }
                  />
                </Space>
                <Button type="primary" style={{ marginTop: 10 }}>
                  Apply
                </Button>
              </Panel>

              {/* Condition */}
              <Panel header="Condition" key="5"
                style={{ display: "table-caption" }}
              >
                <Checkbox.Group
                  options={["Any", "Refurbished", "Brand new", "Old items"]}
                />
              </Panel>

              {/* Ratings */}
              <Panel header="Ratings" key="6">
                <Space direction="vertical">
                  <Rate disabled defaultValue={5} />
                  <Rate disabled defaultValue={4} />
                  <Rate disabled defaultValue={3} />
                  <Rate disabled defaultValue={2} />
                </Space>
              </Panel>
            </Collapse>
          </Sider>

          {/* --------------- MAIN CONTENT --------------- */}
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </div>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
