import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React2 from "../assets/IMG_3649.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>As a specialized scientist in automation, I leverage my extensive experience in full-stack web development to create and enhance laboratory-focused websites. Over the past 16 years, I have gained significant expertise in the biotech industry and have been leading my lab in validating and implementing new technology for 14 of those years.

          Using Python and the innovative Bokeh application, I was able to develop a primer inventory and streamline sample analysis using advanced instruments. With my comprehensive knowledge of full-stack web development, I aim to further enhance this application, enabling easy accessibility and use from anywhere via a phone or tablet. </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>

      </div>
      <div className="right">
        <div className="img-container"></div>
        <div className="img-stack bottom">
          <img src={React2} className="img" alt="true" />
        </div>

      </div>
    </div>
  )
}

export default AboutContent;