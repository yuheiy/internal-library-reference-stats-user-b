"use client";
import React from "react";
import { Typography, Row, Col, Image, Button, Rate, Tabs } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

interface ProductDetails {
  name: string;
  price: number;
  rating: number;
  description: string;
  specifications: string[];
}

const ProductDetailPage: React.FC = () => {
  const product: ProductDetails = {
    name: "Sample Product",
    price: 99.99,
    rating: 4.5,
    description:
      "This is a detailed description of the product. It includes information about its features, specifications, and benefits.",
    specifications: [
      "Specification 1: Value",
      "Specification 2: Value",
      "Specification 3: Value",
    ],
  };

  return (
    <CommonLayout>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Image
            src="https://via.placeholder.com/500x500?text=Product+Image"
            alt="Product Image"
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>{product.name}</Title>
          <Rate allowHalf defaultValue={product.rating} />
          <Paragraph
            style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}
          >
            ${product.price.toFixed(2)}
          </Paragraph>
          <Paragraph>{product.description}</Paragraph>
          <Button type="primary" size="large" style={{ marginTop: "20px" }}>
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" style={{ marginTop: "40px" }}>
        <TabPane tab="Description" key="1">
          <Paragraph>{product.description}</Paragraph>
        </TabPane>
        <TabPane tab="Specifications" key="2">
          <ul>
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </TabPane>
        <TabPane tab="Reviews" key="3">
          <Paragraph>Customer reviews will be displayed here.</Paragraph>
        </TabPane>
      </Tabs>
    </CommonLayout>
  );
};

export default ProductDetailPage;
