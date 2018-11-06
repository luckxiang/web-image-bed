import React, { Component } from 'react';
import { Input, Icon,Button,Checkbox,Form} from 'antd';
import authModel from '../models/Auth'
import './Login.css'
const FormItem = Form.Item;
class Login extends Component {
  constructor () {
    super()
  }
  state = {
    loading: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading:true})
        authModel.login(values).then(re=>{
          this.setState({loading:false})
          this.props.history.push('/page/home')
        },err=>{
          this.setState({loading:false})
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div className="login-left">
        </div>
        <div className="login-right">
          <div className="login-head">
              达达图床
          </div>
          <div className="login-line"></div>
              <div className="login-content">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>记住我</Checkbox>
                  )}
                  <Button loading={this.state.loading} type="primary" htmlType="submit" block className="login-form-button">登录</Button>
                </FormItem>
              </Form>
              </div>
              <div className="login-copyright">
                Copyright <i className="fa fa-copyright"></i> 达达图床 V0.1
              </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);