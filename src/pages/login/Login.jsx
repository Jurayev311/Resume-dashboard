import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      <Form
        className='bg-[#ffffff]'
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          width: '100%',
          maxWidth: 400,
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ color: '#111', textAlign: 'center', marginBottom: '30px', fontWeight: 700 }}>
          Login
        </h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Username required!' }]}
        >
          <Input
            placeholder="Username"
            style={{
              borderRadius: '12px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              color: '#111',
              padding: '10px 15px',
              transition: 'all 0.3s',
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Password required!' }]}
        >
          <Input.Password
            placeholder="Password"
            style={{
              borderRadius: '12px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              color: '#111',
              padding: '10px 15px',
              transition: 'all 0.3s',
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              height: "40px",
              borderRadius: '12px',
              backgroundColor: '#111',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
              padding: '10px',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111')}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Login);
