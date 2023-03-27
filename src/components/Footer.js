import "./FooterStyles.css";
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Houses Dr.</p>
                            <p>SSF, CA, 94080</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            1-234-567-9123
                        </h4>
                        <div className="email">
                            <h4>
                                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                rypab4@gmail.com
                            </h4>

                        </div>
                    </div>
                </div>
                <div className="right">
                    <p>Links to social media profiles</p>
                    <div className="social">
                        <a href="https://github.com/rypab4">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://twitter.com/ry_zappa">
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/ryan-pabalate-594b2125/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer