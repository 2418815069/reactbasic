import React from "react";
import { Menu, Icon } from "antd";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import menuList from "../../config/menuConfig";
import {
  getLocalStorage,
  removeLocalStorage
} from "../../utils/localStrageUtils";
const { SubMenu } = Menu;
const Container = styled.div`
  width: 200px;
  background-color: #011428;
  h1 {
    color: white;
    font-size: 20px;
    height: 80px;
    line-height: 80px;
    padding-left: 25px;
  }
`;
class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { location } = this.props;
    let statekey = [];
    return (
      <Container>
        <h1>管理后台</h1>
        <Menu
          selectedKeys={[location.pathname]}
          defaultOpenKeys={statekey}
          mode="inline"
          theme="dark"
        >
          {menuList.map(item => {
            if (item.children) {
              item.children.filter(child => {
                if (child.key === location.pathname) {
                  statekey.push(item.key);
                }
              });
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.children.map(menuItem => {
                    return (
                      <Menu.Item key={menuItem.key}>
                        <Link to={menuItem.key}>
                          <Icon type={menuItem.icon} />
                          <span>{menuItem.title}</span>
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Container>
    );
  }
}

export default withRouter(SiderMenu);
