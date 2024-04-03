import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";
import { signup } from "../../../apis/Auth";
import { Notification } from "../../../components/Notification";
import { HomeModalContext } from "../../../context/HomeContext";

export const Signup: React.FC = () => {

  type FieldType = {
    full_name?: string;
    email?: string;
    phone_number?: number;
    password?: string;
  };

  const navigate = useNavigate();
  const [signupModal, setSignupModal] = useContext(HomeModalContext);

  const onFinish = (values: FieldType) => {
    signup(values)
    .then((res: any) => {
      if(res.success === true){
        localStorage.setItem("token", res?.data);
        navigate('/dashboard');
        Notification.success("bottomLeft", res?.notification, null) 
      }
      else{ Notification.error("bottomLeft", res?.notification, null) }
    })
  };

  return (
    <>
      <Modal
        title="Sign Up"
        centered
        open={signupModal}
        footer={null}
        onCancel={() => {
          setSignupModal(false);
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
