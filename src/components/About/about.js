import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsFillAwardFill, BsPersonCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />

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
              <BsPersonCheckFill className="about__icon" />
              <h4> Key skills</h4>
              <ul>
                <li>Excellent Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
              </ul>
            </article>

            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h4> Personal Interest</h4>
              <ul className="about__ul">
                <li>Traveling</li>
                <li>Gaming</li>
                <li>Aviation</li>
                <li>Music</li>
              </ul>
            </article>
          </div>
          <p>
            👋 Hi, I’m Jeff Phan 👀 I’m interested in Data Science and DevOps 🌱
            I’m currently learning ReactJS. 💞️ I’m looking to collaborate on
            any project to improve my experience. 📫 Please reach me at:
            jeffphan8816@gmail.com
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
