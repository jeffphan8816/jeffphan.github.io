import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill, BsPersonCheckFill} from 'react-icons/bs';

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsFillAwardFill className="about__icon"/>

                            <h4> Education</h4>
                            <ul>
                                <li>
                                    <h5>Bachelor of Computer Science </h5>
                                    <h6> RMIT University (2017 - 2019) </h6>
                                </li>
                                <li>
                                    <h5>Bachelor of Computer Science </h5>
                                    <h6> Ho Chi Minh University of Technology (2014 - 2017) </h6>
                                </li>

                            </ul>


                        </article>

                        <article className="about__card">
                            <BsPersonCheckFill className="about__icon"/>
                            <h4> Key skills</h4>
                            <ul>
                                <li>Analytical thinking, planning</li>
                                <li>Excellent Communication</li>
                                <li>Innovative and Proactive</li>
                                <li>Time Management</li>
                                <li>Teamwork</li>
                                <li>Problem Solving</li>
                                <li>Strong Work Ethic</li>
                            </ul>
                        </article>

                        <article className="about__card">
                            <BsFillAwardFill className="about__icon"/>
                            <h4> Personal Interest</h4>
                            <ul>
                                <li>Traveling</li>
                                <li>Gaming</li>
                                <li>Aviation</li>
                                <li>Music</li>
                            </ul>
                        </article>
                    </div>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                        aliquam
                        tincidunt, nunc
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    );
}


export default About;