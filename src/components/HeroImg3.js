//hero for resume

import "./HeroImg3Styles.css"
import React, { Component } from 'react'
import resume from '../assets/Resume.png'
import pdf from '../assets/Resume.docx.pdf'

class HeroImg3 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <a href={pdf} download>
            <img className="resume-pic" src={resume} alt="Resume Img" />
          </a>

          <p>
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}
export default HeroImg3