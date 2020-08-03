import React, { Component } from "react";
import {
  FaHome,
  FaBars,
  FaDesktop,
  FaUser,
  FaFile,
  FaAngleDown,
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaDollarSign,
} from "react-icons/fa";
import {
  DollarOutlined,
  LineChartOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
class Cards extends Component {
  state = { icon: "<FaHome/>" };
  render() {
    return (
      <div className="cards">
        <div className="card">
          <div className="icons">
            <span>0</span>
            <FaUsers className="icon" />
          </div>
          <div className="details">
            <h2>Total Users</h2>
            <span>Active users available in this site</span>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <span>1</span>
            <FaBriefcase className="icon" />
          </div>
          <div className="details">
            <h2>Total Jobs</h2>
            <span>Total Jobs available in this site</span>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <span>1</span>
            <FaUserTie className="icon" />
          </div>
          <div className="details">
            <h2>Service Orders</h2>
            <span>Total Service Orders placed till date</span>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <span>
              <FaDollarSign />0
            </span>
            <DollarOutlined className="icon" />
          </div>
          <div className="details">
            <h2>Total Revenue</h2>
            <span>Total Turnover till this date</span>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <span>
              <FaDollarSign />
            </span>
            <LineChartOutlined className="icon" />
          </div>
          <div className="details">
            <h2>Net Profit</h2>
            <span>Total Profit Earned from revenue</span>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <span>0</span>
            <ReloadOutlined className="icon" />
          </div>
          <div className="details">
            <h2>Redeem Request</h2>
            <span>Total pending reddem requests</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
