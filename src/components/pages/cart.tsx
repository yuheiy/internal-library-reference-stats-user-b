"use client";
import React, { useState } from "react";
import { Typography, Table, InputNumber, Button, Space, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 99.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 149.99, quantity: 2 },
  ]);

  const handleQuantityChange = (id: number, quantity: number | null) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity || 0 } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (text: string, record: CartItem) => (
        <InputNumber
          min={1}
          value={record.quantity}
          onChange={(value) => handleQuantityChange(record.id, value)}
        />
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (text: string, record: CartItem) =>
        `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: CartItem) => (
        <Button
          type="link"
          onClick={() => handleRemoveItem(record.id)}
          icon={<DeleteOutlined />}
        >
          Remove
        </Button>
      ),
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CommonLayout>
      <Title level={2}>Shopping Cart</Title>
      <Table dataSource={cartItems} columns={columns} rowKey="id" />
      <Row justify="end">
        <Col>
          <Space direction="vertical" align="end" style={{ marginTop: 16 }}>
            <Title level={3}>Total: ${total.toFixed(2)}</Title>
            <Button type="primary" size="large">
              Proceed to Checkout
            </Button>
          </Space>
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default CartPage;
