import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer id="projects">
    <section className="text-center my-5 project-back">
        <h1 className="h1-responsive font-weight-bold my-5 spec">
          Projects
        </h1>
        <p className="grey-text w-responsive mx-auto mb-5">
        I believe that the main reason is that front-end development satisfies my need for creativity. It enabled me to easily put my ideas into digital form and get results back really quick.
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://i.imgur.com/q0z7dmI.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon fas icon="music" className="pr-2" />
                  MUSIC PORTFOLIO
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">EMMA CARRYL</h4>
              <p className="custom-color-2">
              I found a voice entwined amongst growth & experience, articulating lyrics written reflecting my journey through adolescence, womanhood, young love, happiness and insecurities.
              </p>
              <MDBBtn color="elegant" rounded> 
              <a href="https://emmacarryl.herokuapp.com/" target="_blank" rel="noopener noreferrer">VISIT SITE</a>                
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://i.imgur.com/hiDxdbJ.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="eye" className="pr-2" />
                  Entertainment
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">COMING SOON!</h4>
              <MDBBtn color="elegant" rounded>
              VISIT SITE
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://i.imgur.com/eS8TkBv.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="camera" className="pr-2" />
                  Travel
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">COMING SOON!</h4>
              <MDBBtn color="elegant" rounded>
              VISIT SITE
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://i.imgur.com/OOnUEQt.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="phone" className="pr-2" />
                  Technology
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">COMING SOON!</h4>
              <MDBBtn color="elegant" rounded>
              VISIT SITE
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>
  );
}

export default Projects;