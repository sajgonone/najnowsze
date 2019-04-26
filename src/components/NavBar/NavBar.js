import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
          <i className="fa fa-bars"></i>
        </label>
        <a href="/" className="logo">Mariusz Dam</a>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu">
          <li>
            <AnchorLink href="#wrapper" className="nav-links">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" className="nav-links">About</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#projects" className="nav-links">Projects</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skills" className="nav-links">Skills</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" className="nav-links">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
