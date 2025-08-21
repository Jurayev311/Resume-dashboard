import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { request } from '../../api';


const Register = () => {

    const [name, setName] = useState()
    const [work, setwork] = useState()
    const [me, setMe] = useState()
    const [user, setUser] = useState()
    const [pass, setPass] = useState()

    const handleRegister = () => {
        request
            .post("", {
                fullName: name ,
                job: work,
                about: me,
                username: user,
                password: pass
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
            <Form
                name="register"
                autoComplete="off"
                onFinish={handleRegister}
                style={{
                    width: '100%',
                    maxWidth: 500,
                    padding: '40px',
                    borderRadius: '16px',
                    background: '#fff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
            >
                <h2
                    style={{
                        color: '#111',
                        textAlign: 'center',
                        marginBottom: '30px',
                        fontWeight: 700,
                        fontSize: '24px',
                    }}
                >
                    Register
                </h2>

                <div className="flex gap-4">
                    <Form.Item
                        name="fullName"
                        className="flex-1"
                        rules={[{ required: true, message: 'Full Name required!' }]}
                    >
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            style={{
                                borderRadius: '12px',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="job"
                        className="flex-1"
                        rules={[{ required: true, message: 'Job required!' }]}
                    >
                        <Input
                            onChange={(e) => setwork(e.target.value)}
                            placeholder="Job"
                            style={{
                                borderRadius: '12px',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    name="about"
                    rules={[{ required: true, message: 'About required!' }]}
                >
                    <Input.TextArea
                        onChange={(e) => setMe(e.target.value)}
                        placeholder="About"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        style={{
                            borderRadius: '12px',
                            border: '1px solid #ccc',
                            padding: '10px 15px',
                        }}
                    />
                </Form.Item>

                {/* Username va Password yonma-yon */}
                <div className="flex gap-4">
                    <Form.Item
                        name="username"
                        className="flex-1"
                        rules={[{ required: true, message: 'Username required!' }]}
                    >
                        <Input
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Username"
                            style={{
                                borderRadius: '12px',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        className="flex-1"
                        rules={[{ required: true, message: 'Password required!' }]}
                    >
                        <Input.Password
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Password"
                            style={{
                                borderRadius: '12px',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}
                        />
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '12px',
                            backgroundColor: '#111',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: 'none',
                            padding: '10px',
                            transition: 'all 0.3s ease',
                            marginTop: '10px',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = '#333')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = '#111')
                        }
                    >
                        Register
                    </Button>
                </Form.Item>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#111', fontWeight: 'bold' }}>
                        Login
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default React.memo(Register);
