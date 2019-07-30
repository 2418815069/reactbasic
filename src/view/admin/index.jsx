import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { getLocalStorage } from "../../utils/localStrageUtils";
import SiderMenu from "./menu";
import menuList from "../../config/menuConfig";
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
      result: "",
      doc_title: ""
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    // console.log("document.title", document.title);
    // document.title=lo
    // 如果用户已登陆，自动跳转到管理首页
    if (!getLocalStorage("username")) {
      document.title = "登陆";
      return <Redirect to="/login" />;
    }
    menuList.forEach(item => {
      if (item.children) {
        item.children.forEach(childItem => {
          if (childItem.key === pathname) {
            this.setState(
              {
                doc_title: childItem.title
              },
              () => {
                document.title = this.state.doc_title;
                console.log("wewe1", this.state.doc_title);
              }
            );
          }
        });
      } else {
        if (item.key === pathname) {
          this.setState(
            {
              doc_title: item.title
            },
            () => {
              document.title = this.state.doc_title;
              console.log("wewe2", this.state.doc_title);
            }
          );
        }
      }
    });
  }
  render() {
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
