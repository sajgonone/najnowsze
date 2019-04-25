import React, { Component } from 'react'
import Social from '../Social/Social'
import '../../anime.scss'


export class LandingPage extends Component {
  render() {
    return (
        <div id="wrapper">
        <div id="bg"></div>
        <div id="main">
        <header id="header">
        <h1>Mariusz Dam</h1>
        <p>Front-end Developer</p>
        <Social/>
        </header>
        <div className="arrow bounce"></div>
        </div>
        </div> 
        
    )
  }
}

export default LandingPage;
