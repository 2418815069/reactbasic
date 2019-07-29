import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { getLocalStorage } from "../../utils/localStrageUtils";
import SiderMenu from "./menu";
import RouterList from "../../router/index";

const Container = styled.div`
  display: flex;
  min-height: 850px;
  .main {
    flex: 1;
    background-color: #f0f2f5;
  }
  .adminContent {
    margin: 20px;
    background-color: white;
  }
`;
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  render() {
    console.log("document.title", document.title);
    // document.title=lo
    // 如果用户已登陆，自动跳转到管理首页
    if (!getLocalStorage("username")) {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
        <SiderMenu />
        <div className="main">
          <Header />
          <div className="adminContent">
            <RouterList />
          </div>
        </div>
      </Container>
    );
  }
}
export default withRouter(Admin);
