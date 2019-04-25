import React, { Component } from 'react'


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
            <a href="/" className="nav-links">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-links">About</a>
          </li>
          <li>
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li>
            <a href="#skills" className="nav-links">Skills</a>
          </li>
          <li>
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
