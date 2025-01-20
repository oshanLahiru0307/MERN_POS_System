import React from 'react';
import {useState} from 'react'
import { Button, Checkbox, Form, Input, Card, message } from 'antd';

const Login = () => {

  const [loading, setLoading] = useState(false)

  const onFinish =  (values) => {
    setLoading(true)
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('')
  };

  return (
    <div
      style={{
        height: '100vh', // Full viewport height
        display: 'flex', // Flexbox layout
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)', // Linear gradient
        padding: '20px', // Padding for small screens
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '800px', // Limit maximum width of the card
          borderRadius: '12px',
          overflow: 'hidden', // To clip child elements
          display: 'flex', // Flexbox for layout
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Card shadow
        }}
        bodyStyle={{
          padding: '0', // Remove padding for custom layout
        }}
      >
        {/* Left Image Section */}
        <div
          style={{
            flex: 1,
            backgroundImage: "https://images.pexels.com/photos/824512/pexels-photo-824512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
            backgroundSize: 'cover', // Ensure image covers the area
            backgroundPosition: 'center', // Center the image
          }}
        ></div>

        {/* Right Form Section */}
        <div
          style={{
            flex: 1,
            padding: '40px', // Padding inside the form section
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'white', // Background color for form
          }}
        >
          <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>
          <Form
            name="login"
            style={{
              maxWidth: '300px', // Limit form width
              margin: '0 auto', // Center form horizontally
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
