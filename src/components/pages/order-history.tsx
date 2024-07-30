"use client";
import React from "react";
import { Typography, Table, Tag, Button } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;

interface Order {
  id: string;
  date: string;
  total: number;
  status: "processing" | "shipped" | "delivered";
}

const OrderHistoryPage: React.FC = () => {
  const orders: Order[] = [
    { id: "1", date: "2023-05-01", total: 199.99, status: "delivered" },
    { id: "2", date: "2023-05-15", total: 299.99, status: "shipped" },
    { id: "3", date: "2023-05-30", total: 99.99, status: "processing" },
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => `$${total.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: Order["status"]) => {
        let color = "blue";
        if (status === "shipped") {
          color = "orange";
        } else if (status === "delivered") {
          color = "green";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Order) => (
        <Button type="link">View Details</Button>
      ),
    },
  ];

  return (
    <CommonLayout>
      <Title level={2}>Order History</Title>
      <Table columns={columns} dataSource={orders} rowKey="id" />
    </CommonLayout>
  );
};

export default OrderHistoryPage;
