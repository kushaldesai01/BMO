import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { signup } from "../../../apis/Auth";
import { Notification } from "../../../services/Notification";

export const Signup: React.FC = () => {
  type FieldType = {
    full_name?: string;
    email?: string;
    phone_number?: number;
    password?: string;
  };

  let navigate = useNavigate();

  const onFinish = (values: FieldType) => {
    signup(values).then((res) => {
      if (res.success) {
        Notification.success("top", "Sign up", res.notification);
        navigate("/login");
      } else {
        Notification.error("top", "Sign up", res.notification);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="full_name"
          rules={[{ required: true, message: "Full name required" }]}
        >
          <Input placeholder="Full name" />
        </Form.Item>

        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Email required" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="phone_number"
          rules={[{ required: true, message: "Phone number required" }]}
        >
          <Input placeholder="Phone number" type="number" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Password required" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
