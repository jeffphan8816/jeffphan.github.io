import React from "react";
import './footer.css';
import {BsFacebook, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }
    }
    return (
        <footer onScroll={handleScroll}>
            <a href="#" className={"footer__logo"}>Jeff Phan</a>
            <ul className={"footer__permalinks"}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className={"footer__socials"}>
                <li>
                    <a href="https://www.facebook.com/jeffphan8816" target="_blank" rel="noreferrer"><BsFacebook/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jeff-phan-1a1b1b1b1/" target="_blank"
                       rel="noreferrer"><BsLinkedin/></a>
                </li>
            </ul>
            <div className={"footer__copy"}>
                <small>
                    © 2023 Jeff Phan
                </small>
            </div>

        </footer>
    );
}

export default Footer;