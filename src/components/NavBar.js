import "./NavBarStyles.css"
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import resume from '../assets/Resume.docx.pdf';
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
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
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
                    <Nav.Link href={resume} download>Resume</Nav.Link>
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
