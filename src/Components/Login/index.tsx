import React from 'react';

import { Col, Form, Row, Input, Button, message } from 'antd';
import { useAuth } from '../../Context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

  const navigate = useNavigate();

  const auth = useAuth();

  const onFinish = async (values: {email: string, password: string}) => {
      try {

        await auth.authenticate(values.email, values.password);

        navigate('/profile')

      } catch (error) {
        message.error('user not found, please verify your email and password')
      }
  }

  return (
    <Row
      justify='center'
      align='middle'
      style={{
        height: '100vh'
      }}
    >
      <Col span={12}>
        <Form
          name='basic'
          labelCol={{span: 8}}
          wrapperCol={{span:16}}
          onFinish={onFinish}
        >

          <Form.Item
            label='Email'
            name='email'
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
                Sign in
            </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>

  );
}

export default Login;