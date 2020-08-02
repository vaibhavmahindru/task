import React, { Component } from "react";
import {
  FaHome,
  FaBars,
  FaDesktop,
  FaUser,
  FaFile,
  FaAngleDown,
  FaUserTie,
} from "react-icons/fa";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="hamburger">
          <button>
            <FaBars />
          </button>
        </div>
        <div className="avatar">
          <img src="/images/dp.jpg" alt="" className="dp" />
          <h2>Hi, User</h2>
          <button>
            <FaAngleDown />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
