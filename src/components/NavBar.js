//importing navbar component
import "./NavBarStyles.css"
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
//setting up Navbar hamburger icon is clicked
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false);
        }
    }
   //detect when the user scrolls and change navbar background color
    window.addEventListener("scroll", changeColor)
    //Returning the JSX for the navbar
    return (
        <div className={color? "header header-bg" : "header"}>
            <Link to="/portfolio">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    )
}

export default Navbar
