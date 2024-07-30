"use client";
import React from "react";
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Divider,
} from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;
const { Option } = Select;

interface CheckoutFormValues {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  paymentMethod: string;
}

const CheckoutPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: CheckoutFormValues) => {
    console.log("Received values of form: ", values);
  };

  return (
    <CommonLayout>
      <Title level={2}>Checkout</Title>
      <Row gutter={24}>
        <Col span={16}>
          <Form
            form={form}
            name="checkout"
            onFinish={onFinish}
            layout="vertical"
          >
            <Title level={4}>Shipping Information</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[
                    { required: true, message: "Please input your full name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select placeholder="Select country">
                    <Option value="usa">United States</Option>
                    <Option value="canada">Canada</Option>
                    <Option value="uk">United Kingdom</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="zipCode"
                  label="Zip Code"
                  rules={[
                    { required: true, message: "Please input your zip code!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Title level={4}>Payment Method</Title>
            <Form.Item
              name="paymentMethod"
              rules={[
                { required: true, message: "Please select a payment method!" },
              ]}
            >
              <Select placeholder="Select payment method">
                <Option value="creditCard">Credit Card</Option>
                <Option value="paypal">PayPal</Option>
                <Option value="bankTransfer">Bank Transfer</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Place Order
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Title level={4}>Order Summary</Title>
          {/* Order summary content goes here */}
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default CheckoutPage;
