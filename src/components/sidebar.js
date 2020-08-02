import React, { Component } from "react";
import {
  FaHome,
  FaBars,
  FaDesktop,
  FaUser,
  FaFile,
  FaAngleDown,
} from "react-icons/fa";
class Sidebar extends Component {
  state = {
    array: [
      {
        key: 1,
        icon: "FaHome",
        name: "Comom Menu",
        dropdown: ["first", "second", "third"],
      },
    ],
  };
  render() {
    return (
      <div className="sidebar">
        <div className="avatar">
          <img src="/images/ts2.jpg" alt="" className="pic" />
          <h1>PickGeeks</h1>
        </div>

        <div className="menu">
          <div className="item">
            <FaHome />
            <h2>Dashboard</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaBars />
            <h2>Common Menu</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaUser />
            <h2>Users</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaFile />
            <h2>Content</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaBars />
            <h2>Categories</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaBars />
            <h2>Skills</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaDesktop />
            <h2>Jobs</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
          <div className="item">
            <FaDesktop />
            <h2>Services</h2>
            <button>
              <FaAngleDown />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
