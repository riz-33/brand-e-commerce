import { Col, Row, Table } from "antd";
import React from "react";

export const CartPage = () => {
  return (
    <div>
      <div>
        <Row>
          <Col span={2}>
            <p>Price:</p>
            <p>Type:</p>
            <p>Material:</p>
            <p>Design:</p>
            <p>Customization:</p>
            <p>Protection:</p>
            <p>Warranty:</p>
          </Col>
          <Col span={3}>
            <p>Negotiable</p>
            <p>Classic Shoes</p>
            <p>Plastic Material</p>
            <p>Modern Nice</p>
            <p>Customized Logo and Design Custom Packages</p>
            <p>Refund Policy</p>
            <p>2 Years Full Warranty</p>
          </Col>
        </Row>
      </div>

      <Table>
        <tr>
          <td>
          </td>
        </tr>
      </Table>
    </div>
  );
};
