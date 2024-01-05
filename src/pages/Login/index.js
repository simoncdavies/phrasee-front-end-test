import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { loginUser } from '../../actions/login';
import { checkEmail, checkPassword } from '../../utils/validation';

const Login = ({ loginState, loginUser }) => {
  const navigate = useNavigate();

  const onFinish = values => {
    const { username, password } = values;
    const userData = {
      username,
      password
    };
    loginUser(userData, navigate);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main>
      <Form layout={'vertical'} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Username" name="username" rules={[
          {
            required: true,
            validator: checkEmail
          }
        ]}>
          <Input size="large"/>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[
          {
            required: true,
            validator: checkPassword
          }
        ]}>
          <Input.Password size="large"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

const mapStateToProps = (store) => ({
  loginState: store.loginState,
});
export default connect(mapStateToProps, { loginUser })(Login);
