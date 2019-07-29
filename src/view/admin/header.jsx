import React from "react";
import { withRouter } from "react-router-dom";
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
      nowTime: formateDate(Date.now())
    };
  }
  // state = {
  //   nowTime: formateDate(Date.now())
  // };
  updateTime = () => {
    // const nowTime = formateDate(Date.now());
    this.setState = () => {
      formateDate(Date.now());
      console.log("this.state.nowTime", this.state.nowTime, Date.now());
    };
    // console.log("this.state.nowTime", this.state.nowTime, Date.now());
  };
  componentDidMount() {
    console.log("document.title", document.title);
    // this.updateTime();
    this.interval = setInterval(this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <VirticalCenter className="divider">
          <span>欢迎,{getLocalStorage("username")}</span>
          <Button
            style={{ border: "none" }}
            onClick={() => {
              removeLocalStorage("username");
              this.props.history.replace("/login");
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

export default withRouter(Header);
