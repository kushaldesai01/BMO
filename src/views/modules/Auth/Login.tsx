import React, { useContext } from "react";
import { Modal, Input, Button, Form } from "antd";
import { HomeModalContext } from "../../../context/HomeContext";

export const Login: React.FC = () => {

  type FieldType = {
    email?: string;
    password?: string;
  };

  const [loginModal, setLoginModal] = useContext(HomeModalContext);
  
  const onFinish = (values: FieldType) => {
    console.log(values);
  };

  return(
    <>
      <Modal
        title="Login"
        centered
        open={loginModal}
        footer={null}
        onCancel={() => {
          setLoginModal(false);
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
            name="email"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          {/* <Form.Item<FieldType>
            name="phone_number"
            rules={[{ required: true, message: "Phone number required" }]}
          >
            <Input placeholder="Phone number" type="number" />
          </Form.Item> */}

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Password required" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}