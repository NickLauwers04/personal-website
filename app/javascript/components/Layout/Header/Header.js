import React from 'react'
import { Link } from 'react-router-dom'

// import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Link to="/" className="index-button">
           index
        </Link>
      // <Navbar fixedTop>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <a href="/">
      //         Our Awesome Store
      //       </a>
      //     </Navbar.Brand>
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //   <Navbar.Collapse>
      //     <Nav pullRight>
      //       <NavItem
      //         eventKey={1}
      //         href="#">
      //         Home
      //       </NavItem>
      //       <NavItem
      //         eventKey={2}
      //         href="#">
      //         Shop
      //       </NavItem>
      //       <NavItem
      //         eventKey={3}
      //         href="#">
      //         <Glyphicon glyph="shopping-cart" />
      //         {' Cart'}
      //       </NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    )
  }
}

export default Header;