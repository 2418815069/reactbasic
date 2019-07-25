import React from "react";
import { Button } from "antd";
import {
  getLocalStorage,
  removeLocalStorage
} from "../../utils/localStrageUtils";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: getLocalStorage("username")
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <Button
          type="primary"
          onClick={() => {
            removeLocalStorage("username");
            console.log(this.state.username);
          }}
        >
          退出
        </Button>
      </div>
    );
  }
}

export default Header;
