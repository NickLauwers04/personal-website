import React, { Component } from 'react';
// import { Grid, Nav, NavItem } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <span>&#169; {(new Date().getFullYear())} | Nick Lauwers</span> 
          <span className="email">&#128075;: nlauwers90@gmail.com</span>
        </div>
      </div>
    )
  }
}

export default Footer;