"use client";
import React, { ReactNode } from "react";
import { Layout, Menu, Input, Badge } from "antd";
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => (
  <Layout className="layout" style={{ minHeight: "100vh" }}>
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div
        className="logo"
        style={{ color: "white", fontSize: "24px", marginRight: "20px" }}
      >
        TechStore
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flex: 1 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
      <Search
        placeholder="Search products"
        style={{ width: 200, marginRight: "20px" }}
      />
      <Badge count={5} style={{ marginRight: "20px" }}>
        <ShoppingCartOutlined style={{ fontSize: "24px", color: "white" }} />
      </Badge>
    </Header>
    <Content style={{ padding: "0 50px", marginTop: "20px" }}>
      {children}
    </Content>
    <Footer style={{ textAlign: "center" }}>
      TechStore ©2023 Created by Ant Design
    </Footer>
  </Layout>
);

export default CommonLayout;
