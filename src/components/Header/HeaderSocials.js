import React from "react";
import {RxGithubLogo, RxLinkedinLogo} from 'react-icons/rx';


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/alexander-krasnov-0b0b3b1b3/" target="_blank" rel="noreferrer">
                <RxLinkedinLogo/>
            </a>
            <a href="http://github.com" target="_blank" rel="noreferrer">
                <RxGithubLogo/>
            </a>
        </div>
    );
}

export default HeaderSocials;