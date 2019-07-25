import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import {
  getLocalStorage,
  removeLocalStorage
} from "../../utils/localStrageUtils";
import formateDate from "../../utils/dateUtils";
const Container = styled.div`
  display: flex;
  height: 80px;
  background-color: white;
  flex-direction: column;
  .divider {
    border-bottom: 1px solid #1da57a;
  }
`;
const VirticalCenter = styled.div`
  flex: 1;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: getLocalStorage("username"),
      nowTime: ""
    };
  }
  updateTime = () => {
    this.setState = {
      nowTime: formateDate(Date.now())
    };
    console.log(this.state.nowTime);
  };
  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <VirticalCenter className="divider">
          <span>{this.state.username}</span>
          <Button
            style={{ border: "none" }}
            onClick={() => {
              removeLocalStorage("username");
              console.log(this.state.username);
            }}
          >
            退出
          </Button>
        </VirticalCenter>
        <VirticalCenter>
          <span>{this.state.nowTime}</span>
        </VirticalCenter>
      </Container>
    );
  }
}

export default Header;
