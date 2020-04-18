import React from 'react'
import { Link } from 'react-router-dom'

// import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <Link to="/" className="header-brand">
          technick
        </Link>
      </nav>
    )
  }
}

export default Header;