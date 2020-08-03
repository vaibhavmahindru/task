import React, { Component } from "react";
import {
  UpOutlined,
  ArrowRightOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaCircle } from "react-icons/fa";

class Links extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h2>Useful Quick Links</h2>
          <UpOutlined className="icon" />
        </div>
        <hr />
        <div className="links">
          <div className="link">
            <h3>
              <ArrowRightOutlined />
              <span>Common Site Settings</span>
            </h3>
            <RightOutlined />
          </div>

          <div className="link">
            <h3>
              <UserOutlined />
              <span>Manage Website Users</span>
            </h3>
            <RightOutlined />
          </div>

          <div className="link">
            <h3>
              <FaCircle />
              <span>Manage Categories</span>
            </h3>
            <RightOutlined />
          </div>

          <div className="link">
            <h3>
              <FaCircle />
              <span>Manage Sub Categories</span>
            </h3>
            <RightOutlined />
          </div>

          <div className="link">
            <h3>
              <ArrowRightOutlined />
              <span>Manage Service Requests</span>
            </h3>
            <RightOutlined />
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
