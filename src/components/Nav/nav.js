import React from "react";
import './nav.css';
import {FaRegUserCircle} from 'react-icons/fa';
import {AiOutlineHome} from "react-icons/ai";
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {MdContactMail} from 'react-icons/md';

const Nav = () => {

    const [activeNav, setActiveNav] = React.useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')}
               className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')}
               className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
               className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
               className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
               className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
        </nav>
    );
}
export default Nav;