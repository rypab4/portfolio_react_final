import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import React1 from "../assets/react1.png"
import React2 from "../assets/IMG_3649.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>As a scientist specializing in automation, I utilize my full-stack web development skills to design and develop websites that assist the laboratory.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container"></div>
            <div className="img-stack bottom">  
            <img src={React2} className="img" alt="true"/>
            </div>

        </div>
    </div>
  )
}

export default AboutContent;