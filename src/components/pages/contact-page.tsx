"use client";
import React from "react";
import { Typography, Form, Input, Button, Row, Col } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log("Received values of form: ", values);
    // Here you would typically send the form data to your backend
  };

  return (
    <CommonLayout>
      <Title level={2}>Contact Us</Title>
      <Row gutter={24}>
        <Col span={12}>
          <Paragraph>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </Paragraph>
          <Form
            form={form}
            name="contact"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
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
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: "Please input the subject!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Paragraph>
            <strong>Address:</strong>
            <br />
            123 TechStore Street
            <br />
            Anytown, ST 12345
          </Paragraph>
          <Paragraph>
            <strong>Phone:</strong> (123) 456-7890
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> support@techstore.com
          </Paragraph>
          <Paragraph>
            <strong>Business Hours:</strong>
            <br />
            Monday - Friday: 9am to 5pm
            <br />
            Saturday: 10am to 2pm
            <br />
            Sunday: Closed
          </Paragraph>
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default ContactPage;
