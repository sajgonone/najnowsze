import React, { Component } from 'react'
import {  MDBContainer } from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:  Mariusz Dam
      </MDBContainer>
    </div>
    )
  }
}

export default Footer
