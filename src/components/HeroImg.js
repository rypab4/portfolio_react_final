import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro.png";
import {Link} from 'react-router-dom';
import picture from '../assets/IMG_3649.jpeg'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        {<img className="intro-img" src={IntroImg} alt="IntroImg"/>}
    </div>
        <div className="content">
            <h1>Ryan Pabalate: </h1>
              <p>Scientist, Automation Specialist, FullStack Web Developer</p>
              {<img className="ryan" src={picture} alt=" Ryan Pabalate"/>}
            <div className="proj-link">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>


    </div>
  )
}

export default HeroImg