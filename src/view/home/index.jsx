import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./header";
import { getLocalStorage } from "../../utils/localStrageUtils";
// import { reqLogin } from "../../api/index";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  render() {
    // 如果用户已登陆，自动跳转到管理首页
    if (!getLocalStorage("username")) {
      return <Redirect to="/login" />;
    }
    return <div>h</div>;
  }
}
export default Admin;
