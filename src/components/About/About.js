import React from "react";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

const About = () => {
  return (
    <MDBContainer id="about">
      <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5 spec">
            About Me
          </h2>
                  <div className="mx-auto mb-4">
                    <img
                      src="https://i.imgur.com/hANk9KR.png"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <p className="custom-color">
                    <MDBIcon icon="quote-left" /> My name is Mariusz Dam. I am a 28 year old working professional,who nearly 5 years ago relocated from Warsaw, Poland to London. Living in London, it has allowed me to practice/improve my English,verbal and written, which has allowed me to secure jobs with well known successful business’s in the city.I am a self-motivated individual who constantly wants to achieve and reach there maximum potential.
                  </p>
                  <h4 className="font-weight-bold">Mariusz Dam</h4>
                  <h6 className="font-weight-bold my-3">
                  <MDBBtn color="danger" rounded> 
              <a href="https://drive.google.com/file/d/18kmT2P0jYFW53in6Y2kbbq_F6igrcVqR/view" target="_blank" rel="noopener noreferrer">DOWNLOAD MY RESUME</a>                
              </MDBBtn>
                  </h6>
        </section>
    </MDBContainer>
  );
}

export default About;