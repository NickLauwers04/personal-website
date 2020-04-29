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

        <div className="float-right">

        	<a href="https://github.com/Nick-Lauwers"
        		 className="header-link" 
        	   target="_blank">
        		<i class="fab fa-github fa-2x"></i>
        	</a>

        	<a href="https://www.linkedin.com/in/nicklauwers/" 
        		 className="header-link" 
        		 target="_blank">
        		<i class="fab fa-linkedin-in fa-2x"></i>
        	</a>
        </div>
      </nav>
    )
  }
}

export default Header;