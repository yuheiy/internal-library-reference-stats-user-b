"use client";
import React from "react";
import { Typography, Card, Row, Col, Button, Carousel } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;

interface Product {
  id: number;
  name: string;
  description: string;
}

const HomePage: React.FC = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the product description",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the product description",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the product description",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is the product description",
    },
  ];

  return (
    <CommonLayout>
      <Carousel autoplay style={{ marginBottom: "40px" }}>
        <div>
          <h3
            style={{
              height: "300px",
              color: "#fff",
              lineHeight: "300px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            Welcome to TechStore
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "300px",
              color: "#fff",
              lineHeight: "300px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            New Arrivals
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "300px",
              color: "#fff",
              lineHeight: "300px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            Special Offers
          </h3>
        </div>
      </Carousel>

      <Title level={2}>Featured Products</Title>
      <Row gutter={[16, 16]}>
        {featuredProducts.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={`https://via.placeholder.com/300x200?text=Product+${product.id}`}
                />
              }
            >
              <Card.Meta
                title={product.name}
                description={product.description}
              />
              <Button type="primary" style={{ marginTop: "10px" }}>
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </CommonLayout>
  );
};

export default HomePage;
