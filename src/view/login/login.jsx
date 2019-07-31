import React from "react";
import "./login.less";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { setLocalStorage, getLocalStorage } from "../../utils/localStrageUtils";
import { reqLogin } from "../../api/index";

class WrappedNormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // result: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      console.log(values);
      if (!err) {
        console.log(values);
        if (values.remember) {
          setLocalStorage("username", values.username);
          setLocalStorage("password", values.password);
          setLocalStorage("loginStatus", 1);
        }
        // console.log("Received values of form: ", values);
        const result = await reqLogin(values.username, values.password);
        // values
        // axios
        //   .post("/login", {
        //     username: values.username,
        //     password: values.password
        //   })
        //   .then(response => {
        //     this.setState({
        //       result: response.data
        //     });
        if (result.status === 0) {
          message.success("登陆成功 ");
          // 跳转到后台管理界面
          this.props.history.push("/");
        } else if (result.status === 1) {
          message.error("登陆失败,用户名或密码不正确");
        }
      } else {
        message.error("登陆失败，请检查格式 ");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginBox">
        <h1 className="index-title">React项目: 后台管理系统</h1>
        <div className="login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <h1 className="loginTitle">用户登陆</h1>
            <Form.Item>
              {getFieldDecorator("username", {
                initialValue: getLocalStorage("username"),
                rules: [
                  { required: true, message: "用户名不能为空" },
                  { min: 4, message: "用户名最少4位" },
                  { max: 12, message: "用户名最多12位" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "用户名必须是英文、数字或下划线组成"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                initialValue: getLocalStorage("password"),
                rules: [
                  { required: true, message: "密码不能为空" },
                  { min: 4, message: "用户名最少4位" },
                  { max: 12, message: "用户名最多12位" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "用户名必须是英文、数字或下划线组成"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
const Login = Form.create({ name: "normal_login" })(WrappedNormalLoginForm);
export default Login;
