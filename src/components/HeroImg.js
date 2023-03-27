//image on homepage

import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro.png";
import {Link} from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        {<img className="intro-img" src={IntroImg} alt="IntroImg"/>}
    </div>
        <div className="content">
            <h1>Ryan Pabalate: </h1>
              <p>Scientist, Automation Specialist, FullStack Web Developer</p>
            <div className="proj-link">
            <Link to="/portfolio" className="btn">Portfolio</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>


    </div>
  )
}

export default HeroImg