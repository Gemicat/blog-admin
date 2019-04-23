/**
 * title: 登录
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import Axios from 'axios';
import request from '@/utils/request'

const styles =  require('./SignIn.scss')

console.log(request)

interface SignInState {
  size: string
}

interface SignInProps {
  form: {
    validateFields: Function,
    getFieldDecorator: Function
  }
}

class SignInPage extends Component<SignInProps, SignInState> {
  state = {
    size: 'large'
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (err) return false
      const { data } = await Axios.post('/api/user/signIn', values)
      if (data.success) {
        message.success('登录成功')
      } else {
        message.error(data.message)
      }
    });
  }
  render() {
    const { size } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.signin}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input size={size} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input size={size} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" size={size} className={styles.login_button} htmlType="submit">
            登 录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'user-signin' })(SignInPage)
