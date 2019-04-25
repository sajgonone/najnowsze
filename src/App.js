import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'


export class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
    )
  }
}

export default App
