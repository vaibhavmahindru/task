import React, { Component } from "react";
import {
  UpOutlined,
  ArrowRightOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
class Activities extends Component {
  state = {
    array: [
      {
        key: 1,
        title: "Nora usher has contacted for you an enquiry",
        time: "11 hour(s) ago",
      },
      {
        key: 2,
        title: "Nora usher has contacted for you an enquiry",
        time: "11 hour(s) ago",
      },
      {
        key: 3,
        title: "Nora usher has contacted for you an enquiry",
        time: "11 hour(s) ago",
      },
      {
        key: 4,
        title: "Nora usher has contacted for you an enquiry",
        time: "11 hour(s) ago",
      },
      {
        key: 5,
        title: "Nora usher has contacted for you an enquiry",
        time: "11 hour(s) ago",
      },
    ],
  };
  render() {
    return (
      <div className="activities">
        <div className="title">
          <h2>
            Recent Activities <span>see all</span>
          </h2>
          <UpOutlined className="icon" />
        </div>
        <hr />
        <div className="activity">
          {this.state.array.map((item) => {
            return (
              <div>
                <h3 className="sub-title" key={item.key}>
                  {item.title}
                  <br />
                  <span className="time">{item.time}</span>
                </h3>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Activities;
