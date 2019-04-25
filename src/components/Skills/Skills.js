import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBProgress } from "mdbreact";

const Skills = () => {
  return (
    <section id="skills" className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5 spec">
        Skills
        </h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">
        Self development is key to success in life, I have an interest in new technologies and coding in my personal time. I’m always keen to learn something new and develop myself.
        </p>
      <MDBRow>
        <MDBCol md="4">
          <MDBIcon fab icon="html5" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">HTML</h5>
          <MDBProgress color="success" material value={68} height="20px">
            68%
      </MDBProgress>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon fab icon="css3-alt" size="3x" className="cyan-text" />
          <h5 className="font-weight-bold my-4">CSS</h5>
          <MDBProgress color="success" material value={77} height="20px">
            77%
      </MDBProgress>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon fab icon="react" size="3x" className="blue-text" />
          <h5 className="font-weight-bold my-4">ReactJs</h5>
          <MDBProgress color="success" material value={51} height="20px">
            51%
      </MDBProgress>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Skills;