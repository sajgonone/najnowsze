import React, { Component } from 'react'
import '../../anime.scss'


class Social extends Component {
  render() {
    return (
        <div className="social-buttons">
        <a href="https://www.facebook.com/mariusz.dam" target="_blank" rel="noopener noreferrer" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
          <span className="social-button__inner">
           <i className="fab fa-facebook-f"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/mariusz-dam-4bb369170/" target="_blank" rel="noopener noreferrer"  className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
          <span className="social-button__inner">
           <i className="fab fa-linkedin-in"></i>
          </span>
        </a>
        <a href="https://www.instagram.com/sajgonizyl/" target="_blank" rel="noopener noreferrer"  className="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
          <span className="social-button__inner">
           <i className="fab fa-instagram"></i>
          </span>
        </a>
        <a href="https://github.com/sajgonone" target="_blank" rel="noopener noreferrer"  className="social-buttons__button social-button social-button--github" aria-label="GitHub">
          <span className="social-button__inner">
           <i className="fab fa-github"></i>
          </span>
        </a>
        <a href="https://twitter.com/MariuszDam" target="_blank" rel="noopener noreferrer"  className="social-buttons__button social-button social-button--twitter" aria-label="Twitter">
          <span className="social-button__inner">
           <i className="fab fa-twitter"></i>
          </span>
        </a>
      </div>
    )
  }
}

export default Social
