import React from 'react';
import { Card, Form, Input, Button, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { addToStorage } from 'utils/index';
import { IUser } from 'types/user';

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = (values: IUser) => {
    addToStorage(values.username, 'user');
    navigate('/user');
  };

  return (
    <Row justify={'center'} style={{ paddingTop: '1em' }}>
      <Card title="Login" style={{ width: 500 }}>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default LoginPage;
