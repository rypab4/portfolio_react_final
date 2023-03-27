import "./NavBarStyles.css"
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

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
    window.addEventListener("scroll", changeColor)
    return (
        <div className={color? "header header-bg" : "header"}>
            <Link to="/portfolio">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink exact to="/portfolio_react_final" activeClassName="active">Home</NavLink>
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
