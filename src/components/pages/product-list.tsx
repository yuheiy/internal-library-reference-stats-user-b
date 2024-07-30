"use client";
import React, { useState } from "react";
import { Typography, Card, Row, Col, Button, Pagination } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const products: Product[] = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: "This is the product description",
    price: 99.99,
  }));

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <CommonLayout>
      <Title level={2}>All Products</Title>
      <Row gutter={[16, 16]}>
        {displayedProducts.map((product) => (
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
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>${product.price.toFixed(2)}</span>
                <Button type="primary">Add to Cart</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        total={products.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </CommonLayout>
  );
};

export default ProductListPage;
