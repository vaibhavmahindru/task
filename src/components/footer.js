import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          <span>Copyright © 2020 Pickgeeks, All rights reserved.</span>
          <br />
          Thank you for partnering.
        </p>
        <img src="/images/logo.jpg" alt="" className="logo" />
      </footer>
    );
  }
}

export default Footer;
