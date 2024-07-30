"use client";
import React, { useState } from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Upload,
  message,
  Avatar,
  Row,
  Col,
} from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const UserProfilePage: React.FC = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, Anytown, USA",
  });

  const onFinish = (values: UserProfile) => {
    setUserProfile(values);
    setIsEditing(false);
    message.success("Profile updated successfully");
  };

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue(userProfile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    form.resetFields();
  };

  return (
    <CommonLayout>
      <Title level={2}>User Profile</Title>
      <Row gutter={24}>
        <Col span={8}>
          <Avatar size={200} icon={<UserOutlined />} />
          <Upload>
            <Button icon={<UploadOutlined />}>Change Avatar</Button>
          </Upload>
        </Col>
        <Col span={16}>
          {isEditing ? (
            <Form
              form={form}
              name="userProfile"
              onFinish={onFinish}
              layout="vertical"
              initialValues={userProfile}
            >
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
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
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <>
              <p>
                <strong>Full Name:</strong> {userProfile.fullName}
              </p>
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
              <p>
                <strong>Phone:</strong> {userProfile.phone}
              </p>
              <p>
                <strong>Address:</strong> {userProfile.address}
              </p>
              <Button type="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            </>
          )}
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default UserProfilePage;
